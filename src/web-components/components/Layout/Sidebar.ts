import { getWindowDimensions } from "../../utils/windowDimensions"

class Sidebar extends HTMLElement {
  constructor() {
    super()
  }

  connectedCallback() {
    const { isMobile } = getWindowDimensions()
    const protocol = this.getAttribute("protocol")

    this.innerHTML = `
      <div class="mycelium flex flex-col w-fit p-5 min-w-[300px] ${
        isMobile
          ? "rounded-lg shadow-md"
          : "h-screen overflow-y-scroll oveflow-x-hidden overscroll-none"
      }">
        ${
          !isMobile
            ? `
                <div class={css.nav}>
                  <div class="flex items-center justify-center py-5">
                    <a href="/" style="border:none; background:transparent">
                      <wc-logo class="p-0" ></wc-logo>
                    </a>
                  </div>
                  ${protocol === "near" ? "<wc-near-login></wc-near-login>" : ""}
                </div>
              `
            : ""
        }
        ---Methods
        ${isMobile ? "<div class={css.arrow} />" : ""}
      </div>
    `
  }
}
customElements.define("wc-sidebar", Sidebar)
