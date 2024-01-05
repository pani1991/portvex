import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
const PriceInput = ({ content }) => {
  return (
    <div className="position-relative fild ">
      <div className="position-relative price-input-wrapper py-1 px-2">
        <button className="p-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            id="Outline"
            viewBox="0 0 24 24"
            width="512"
            height="512"
          >
            <path d="M23,11H13V1a1,1,0,0,0-1-1h0a1,1,0,0,0-1,1V11H1a1,1,0,0,0-1,1H0a1,1,0,0,0,1,1H11V23a1,1,0,0,0,1,1h0a1,1,0,0,0,1-1V13H23a1,1,0,0,0,1-1h0A1,1,0,0,0,23,11Z"></path>
          </svg>
        </button>
        <div>
          <input
            type="number"
            placeholder="1000000"
            //  value={"10000".toString()
            //             .replace(
            //               /\B(?=(\d{3})+(?!\d))/g,
            //               ","
            //             )}
          />
          <span>تومان</span>
        </div>
        <button className="p-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-dash-lg"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8Z"
            />
          </svg>{" "}
        </button>
      </div>
      <style jsx>{`
        .fild {
          position: relative;
          line-height: 42px;
          font-size: 0.875em;
          margin-top: 6px;
        }
        .fild label {
          top: -10px;
          display: block;
          font-size: 0.8em;
          color: var(--bs-body-color);
          line-height: normal;
          position: absolute;
          background: var(--bs-body-bg);
          margin-inline-start: 9px;
          padding: 0px 5px;
        }
        .fild input[type="text"],
        .fild input[type="password"],
        .fild select,
        .fild textarea {
          line-height: 42px;
          font-size: 0.875em;
          border-radius: var(--bs-border-radius);
          width: -webkit-fill-available;
          width: -moz-available;
          border: 1px solid var(--bs-body-color) !important;
          padding-inline: 5px;
          background: transparent;
        }
        .fild.danger input[type="text"],
        .fild.danger input[type="password"],
        select.danger {
          border: 1px solid var(--color6) !important;
        }
        .fild.danger label {
          color: var(--color6) !important;
        }
        .fild.danger .error {
          font-size: 0.8em;
          color: var(--color6) !important;
          font-weight: 600;
        }
        input::-webkit-outer-spin-button,
        input::-webkit-inner-spin-button {
          -webkit-appearance: none;
          margin: 0;
        }
        input[type="number"] {
          -moz-appearance: textfield;
        }
        .fild .price-input-wrapper {
          border-radius: var(--bs-border-radius);
          border: 1px solid var(--bs-body-color) !important;
          display: flex;
          align-items: center;
          justify-content: space-between;
          max-height: 47px !important;
        }
        .fild .price-input-wrapper input {
          line-height: 13px !important;
          font-size: 0.875em;
          border-radius: var(--bs-border-radius);
          width: -webkit-fill-available;
          width: -moz-available;
          border: 0px solid var(--bs-body-color) !important;
          padding-inline: 0px;
          background: transparent;
          text-align: center;
          width: 100px;
          font-size: 1rem;
          padding: 0px;
        }
        .fild .price-input-wrapper button {
          border-radius: var(--bs-border-radius);
          border: 1px solid var(--bs-body-color) !important;
          display: flex;
          background: transparent;
        }
        .fild .price-input-wrapper button:hover {
          border-color: var(--color1) !important;
          color: var(--color1) !important;
          fill: var(--color1) !important;
          background: transparent !important;
        }
        .fild .price-input-wrapper button svg {
          width: 10px;
          height: 10px;
        }
      `}</style>
    </div>
  );
};

export default PriceInput;
