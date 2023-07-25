import { getWindowDimensions } from "../../utils/windowDimensions"

class Layout extends HTMLElement {
  open: boolean
  displaySidebar: boolean

  constructor() {
    super()

    this.open = false
    this.displaySidebar = false
  }

  connectedCallback() {
    const params = JSON.parse(this.getAttribute("params"))
    const { protocol, contract } = params
    const { isMobile } = getWindowDimensions()

    this.innerHTML = `
        <div class="flex">
          ${!isMobile ? `<wc-sidebar protocol="${protocol}"></wc-sidebar>` : ""}
          <div class="flex-1 h-full overflow-y-scroll oveflow-x-hidden overscroll-none">
           <div class='bg-white dark:bg-neutral-800 p-4'>
              ${
                isMobile
                  ? `
                    <div class="flex gap-2 items-center justify-between mb-2">
                      <div class="flex gap-5 items-center">
                        <button
                          aria-controls="mobileSidebarWrap"
                          class={css.menu}
                          onClick={() => setOpen(!open)}
                          style={{ flex: '0 0 auto' }}
                        >
                          <span class={open ? css.open : css.closed} aria-hidden />
                          <span class="sr-only">{open ? 'Close Menu' : 'Open Menu'}</span>
                        </button>
                        <Link to="/" class="border-0 shrink-1 basis-20">
                          <wc-ogo class="p-0" ></wc-logo>
                        </Link>
                      </div>
                      {protocol === 'near' && <NearLogin />}
                    </div>
                  `
                  : ""
              }
              <wc-contract-name-form
                protocol="${protocol === "near" ? "NEAR" : "CosmWasm"}"
                contract="${contract}"
              />
            </div>
        ${
          isMobile
            ? `
                <div
                  class="absolute overflow-hidden width-9/10 left-[2.5%] z-20 h-full max-h-screen"
                  data-state="${this.open ? "open" : "closed"}"
                  id="mobileSidebarWrap"
                  aria-live="polite"
                  style="display: ${this.displaySidebar ? undefined : "none"}"
                >
                  <wc-sidebar protocol="${protocol}"></wc-sidebar>
                </div>
              `
            : ""
        }
            <div
              class="container mx-auto p-4"
              id="mainContent"
              aria-live="polite"
            >
              ${
                protocol === "near"
                  ? "--NearContract"
                  : protocol === "cw"
                  ? "--CosmWasmContract"
                  : ""
              }
            </div>
          </div>
        </div>
      `
  }
}
customElements.define("wc-layout", Layout)
