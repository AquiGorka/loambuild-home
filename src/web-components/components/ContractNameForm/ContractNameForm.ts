import { init } from "../../../protocols/near"

class ContractNameForm extends HTMLElement {
  error: String
  custom: String

  constructor() {
    super()

    this.error = ""
    this.custom = this.getAttribute("contract") || ""

    this.onsubmit = (ev) => {
      ev.preventDefault()
      if (!ev.target) {
        return
      }
      const protocol = this.getAttribute("protocol")
      const data = new FormData(ev.target)
      const custom = data.get("customContract")

      if (!custom || typeof custom !== "string") {
        return
      }

      try {
        if (protocol === "CosmWasm") {
          window.location.pathname = `/cw/${custom}`
        } else if (protocol === "NEAR") {
          window.location.pathname = `/near/${init(custom).contract}`
        } else {
          throw new Error(`invalid protocol "${protocol}"!`)
        }
      } catch (e) {
        if (e instanceof Error) {
          this.error = e.message
        } else {
          this.error = String(e)
        }
        this.update()
      }
    }
  }

  connectedCallback() {
    this.update()
  }

  update() {
    const autoFocus = this.getAttribute("autoFocus") || undefined
    const contract = this.getAttribute("contract") || ""

    this.innerHTML = `
        <form class="border-2 flex items-center rounded-md text-white w-full">
          <div class="flex-1 flex p-2">
            <label class="" htmlFor="customContract">
              <svg
                viewBox="0 0 288 288"
                height="1.5em"
                width="1.5em"
                style="fill: var(--fg);"
              >
                <desc>NEAR</desc>
                <path d="M187.58,79.81l-30.1,44.69a3.2,3.2,0,0,0,4.75,4.2L191.86,103a1.2,1.2,0,0,1,2,.91v80.46a1.2,1.2,0,0,1-2.12.77L102.18,77.93A15.35,15.35,0,0,0,90.47,72.5H87.34A15.34,15.34,0,0,0,72,87.84V201.16A15.34,15.34,0,0,0,87.34,216.5h0a15.35,15.35,0,0,0,13.08-7.31l30.1-44.69a3.2,3.2,0,0,0-4.75-4.2L96.14,186a1.2,1.2,0,0,1-2-.91V104.61a1.2,1.2,0,0,1,2.12-.77l89.55,107.23a15.35,15.35,0,0,0,11.71,5.43h3.13A15.34,15.34,0,0,0,216,201.16V87.84A15.34,15.34,0,0,0,200.66,72.5h0A15.35,15.35,0,0,0,187.58,79.81Z" />
              </svg>
              <span class="sr-only">Contract Name</span>
            </label>
            <input
              class="flex-1 bg-transparent mx-3 focus:outline-none"
              id="customContract"
              name="customContract"
              required
              autoFocus=${autoFocus}
              value="${contract}"
            />
            <button type="submit" class="disabled:opacity-40" ${
              this.custom === contract ? "disabled" : ""
            }>
              &rarr;
            </button>
          </div>
          ${this.error ? `<div class="errorHint">${this.error}</div>` : ""}
        </form>
      `
  }
}
customElements.define("wc-contract-name-form", ContractNameForm)
