import type { ConnectedWalletAccount } from "near-api-js"

import useNear from "../../../react/hooks/useNear"

class NearLogin extends HTMLElement {
  loaded: boolean
  user?: ConnectedWalletAccount

  constructor() {
    super()

    this.loaded = false
    this.user = undefined

    const { currentUser } = useNear()
    currentUser?.then((u) => {
      this.loaded = true
      this.user = u
      this.update()
    })

    this.onclick = (ev) => {
      console.log("click:", ev.target)
    }
  }

  connectedCallback() {
    this.update()

    // console.log(this.querySelector(".button-sign-in").onclick)
    // ;(this.querySelector(".button-sign-in") as HTMLElement).onclick = (ev) => {
    // console.log("click:", ev.target)
    // }
    // console.log(this.querySelector(".button-sign-in"))
    // this.querySelector(".button-sign-in").addEventListener(
    // "click",
    // this.log.bind(this),
    // )
    // this.addEventListener("click", this.log.bind(this))
  }

  log(ev) {
    console.log(ev, "click")
  }

  update() {
    this.innerHTML = `
      <div
        class="flex justify-around "
        style="visibility: ${this.loaded ? "undefined" : "hidden"}"
      >
        ${
          this.user
            ? `
                --Dropdown
                  trigger={
                    <button title={user.accountId} class="bg-black text-white flex items-center gap-3 px-4 py-2 text-lg rounded-lg">
                      --Wallet
                      <span class="ellipsis">
                        {user.accountId}
                      </span>
                    </button>
                  }
                  items={[{ children: "Sign Out", onSelect: signOut }]}
                --
              `
            : `
              <button class="flex items-center justify-center button-sign-in">
                <wc-wallet></wc-wallet><span class="ml-2">Sign In</span>
              </button>
            `
        }
      </div>
    `
  }
}
customElements.define("wc-near-login", NearLogin)
