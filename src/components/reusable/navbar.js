import React, { Component } from "react"
import { BiCart } from "react-icons/bi"
// import { Link } from "gatsby"

export default class Navbar extends Component {
  render() {
    return (
      <div>
        <nav class=" font-sans navbar mb-2 bg-primary-focus text-neutral-content ">
          <div class="flex-1 px-2 mx-2">
            <span class="text-lg font-bold">thingClo</span>
          </div>
          <div class="flex-none hidden px-2 mx-2 lg:flex">
            <div class="flex items-stretch">
              <a
                href="/page-2/"
                class="btn normal-case btn-ghost btn-sm rounded-btn"
              >
                Likes
              </a>
              <a
                href="/page-2/"
                class="btn btn-ghost normal-case btn-sm rounded-btn"
              >
                Notifications
              </a>
              <a
                href="/page-2/"
                class="btn btn-ghost btn-sm normal-case rounded-btn"
              >
                Files
              </a>
              {/* <a href="/page-2/" class="btn text-2xl bg-primary-focus border-0">
              <BiCart className="text-2xl font-bold bg-primary-focus" />
            </a> */}
            </div>
          </div>
          <div className="btn text-2xl bg-primary-focus border-0">
            <BiCart />
          </div>
          <div class="flex-none dropdown dropdown-left">
            <button
              tabindex="0"
              class="btn  md:hidden block btn-square btn-ghost"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                class="inline-block w-6 h-6 stroke-current"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </button>

            <ul
              tabindex="-1"
              class="p-2 shadow-lg menu dropdown-content bg-base-100 text-primary-focus rounded-box w-52"
            >
              <a
                href="/page-2/"
                class="btn-active normal-case btn btn-ghost btn-sm rounded-btn"
              >
                Likes
              </a>
              <a
                href="/page-2/"
                class="btn normal-case btn-ghost btn-sm rounded-btn"
              >
                Notifications
              </a>
              <a
                href="/page-2/"
                class="btn normal-case btn-ghost btn-sm rounded-btn"
              >
                Files
              </a>
            </ul>
          </div>
        </nav>
      </div>
    )
  }
}
