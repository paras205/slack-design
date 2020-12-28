import React from "react";
import HeaderIcon from "../assets/image/header_action.png";

const Header = () => {
  return (
    <header className="header">
      <div className="header-wrapper">
        <div className="header-left">
          <h3>#product-designers</h3>

          <ul>
            <li>
              <a href="#">
                <img src={HeaderIcon} alt="" />
              </a>
            </li>
          </ul>
        </div>
        <div className="header-right">
          <ul>
            <li>
              <a href="#">
                <svg
                  width="17"
                  height="17"
                  viewBox="0 0 17 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M14.9387 13.6553C14.6069 14.0093 14.2086 14.3412 13.8989 14.7173C13.4121 15.2483 12.8147 15.4475 12.1289 15.4032C11.1554 15.3368 10.2483 15.005 9.34113 14.5846C7.37201 13.6332 5.66839 12.3057 4.25239 10.6021C3.21252 9.34097 2.34964 8.01348 1.77439 6.46473C1.5089 5.71248 1.30977 4.96023 1.37615 4.18586C1.4204 3.69911 1.61952 3.27874 1.97352 2.92474C2.34964 2.54861 2.72577 2.17249 3.12402 1.77424C3.63289 1.28749 4.27451 1.28749 4.76126 1.77424C5.07101 2.06187 5.38076 2.39374 5.69051 2.70349C5.97814 2.99111 6.28788 3.30086 6.59763 3.61061C7.12863 4.14161 7.12863 4.76111 6.59763 5.29211C6.22151 5.66823 5.84539 6.04436 5.44714 6.42048C5.33651 6.53111 5.33651 6.59748 5.38076 6.70811C5.62414 7.3276 6.00026 7.8586 6.39851 8.36748C7.21713 9.38522 8.16851 10.2702 9.25263 10.9782C9.496 11.1331 9.7615 11.2216 10.0049 11.3765C10.1376 11.4428 10.2261 11.4207 10.3146 11.3101C10.6907 10.934 11.0669 10.5578 11.4651 10.1596C11.974 9.65072 12.6156 9.65072 13.1024 10.1596C13.7219 10.7791 14.3414 11.3986 14.9387 11.996C15.4476 12.4827 15.4476 13.1243 14.9387 13.6553V13.6553Z"
                    stroke="#606060"
                    stroke-width="1.5"
                  />
                </svg>
              </a>
            </li>
            <li>
              <a href="#">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M8.33984 0.32251C4.20453 0.32251 0.839844 3.68719 0.839844 7.82251C0.839844 11.9578 4.20453 15.3225 8.33984 15.3225C12.4752 15.3225 15.8398 11.9578 15.8398 7.82251C15.8398 3.68719 12.4752 0.32251 8.33984 0.32251ZM7.40242 5.01003C7.40242 4.49253 7.82242 4.07253 8.33992 4.07253C8.85789 4.07253 9.27742 4.49206 9.27742 5.01003C9.27742 5.52799 8.85742 5.94753 8.33992 5.94753C7.82242 5.94753 7.40242 5.52753 7.40242 5.01003ZM7.40242 7.82259C7.40242 7.30462 7.82242 6.88509 8.33992 6.88509C8.85789 6.88509 9.27742 7.30509 9.27742 7.82259V10.6351C9.27742 11.1526 8.85742 11.5726 8.33992 11.5726C7.82242 11.5726 7.40242 11.1526 7.40242 10.6351V7.82259ZM2.24603 7.82244C2.24603 11.1824 4.97931 13.9162 8.33978 13.9162C11.6998 13.9162 14.4335 11.1824 14.4335 7.82244C14.4335 4.46244 11.6998 1.72869 8.33978 1.72869C4.97931 1.72869 2.24603 4.46244 2.24603 7.82244Z"
                    fill="#606060"
                  />
                </svg>
              </a>
            </li>

            <li>
              <a href="#">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M10.4235 2.52253V2.52253C10.7326 3.39076 11.7241 3.80155 12.5565 3.40576V3.40576C13.8789 2.7775 15.2579 4.1565 14.6288 5.47885V5.47885C14.2338 6.31125 14.6446 7.30279 15.5129 7.61192V7.61192C16.8919 8.10186 16.8919 10.0525 15.5129 10.5432V10.5432C14.6446 10.8515 14.2338 11.8439 14.6288 12.6763V12.6763C15.2579 13.9978 13.8789 15.3768 12.5565 14.7486V14.7486C11.7241 14.3528 10.7326 14.7636 10.4235 15.6318V15.6318C9.93685 16.7617 8.03208 16.7858 7.49215 15.6318V15.6318C7.18385 14.7636 6.19147 14.3528 5.35907 14.7486V14.7486C4.03756 15.3768 2.65856 13.9978 3.28682 12.6763V12.6763C3.6826 11.8439 3.27182 10.8515 2.40276 10.5432V10.5432C1.25623 10.0008 1.26956 8.0477 2.40276 7.61192V7.61192C3.27182 7.30279 3.6826 6.31125 3.28682 5.47885C2.65856 4.1565 4.03756 2.7775 5.35907 3.40576V3.40576C6.19147 3.80155 7.18385 3.39076 7.49215 2.52253V2.52253C7.98292 1.14353 9.93269 1.14353 10.4235 2.52253V2.52253V2.52253Z"
                    stroke="#606060"
                    stroke-width="1.5"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M11.5477 8.98939C11.5477 7.61039 10.4295 6.49219 9.05049 6.49219C7.67066 6.49219 6.55246 7.61039 6.55246 8.98939C6.55246 10.3684 7.67066 11.4866 9.05049 11.4866C10.4295 11.4866 11.5477 10.3684 11.5477 8.98939V8.98939V8.98939Z"
                    stroke="#606060"
                    stroke-width="1.5"
                  />
                </svg>
              </a>
            </li>
            <li>
              <form>
                <div className="header-form-wrapper">
                  <input
                    className="header_search_form"
                    placeholder="Search"
                    value="search"
                    name="search"
                    onChange={() => console.log("input changed")}
                  />
                  <svg
                    width="16"
                    height="15"
                    viewBox="0 0 16 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M6.93271 11.8942C9.9385 11.8942 12.3752 9.45754 12.3752 6.45175C12.3752 3.44595 9.9385 1.00928 6.93271 1.00928C3.92691 1.00928 1.49023 3.44595 1.49023 6.45175C1.49023 9.45754 3.92691 11.8942 6.93271 11.8942Z"
                      stroke="#9E9EA6"
                      stroke-width="1.5"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M12 11L15 14L12 11Z"
                      fill="#606060"
                    />
                    <path
                      d="M12 11L15 14"
                      stroke="#9E9EA6"
                      stroke-width="1.5"
                      stroke-linecap="round"
                    />
                  </svg>
                </div>
              </form>
            </li>
            <li>
              <a href="#">
                <svg
                  width="18"
                  height="17"
                  viewBox="0 0 18 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M8.54844 5.60205C9.95275 5.60205 10.8511 6.6374 10.8511 8.2767C10.8511 9.91601 9.94242 10.9609 8.52779 10.9609C7.17512 10.9609 6.34906 9.94477 6.34906 8.2767C6.34906 6.59905 7.16479 5.60205 8.54844 5.60205ZM0.380859 8.22885C0.380859 13.3864 4.0465 16.2336 9.08547 16.2336C10.4175 16.2336 12.1037 15.9864 12.5652 15.7639C13.0268 15.5414 12.6894 14.4398 12.5652 14.556C12.4411 14.6722 10.4898 15.0161 9.10612 15.0161C4.95517 15.0161 1.83679 12.6291 1.83679 8.28637C1.83679 4.27918 4.75898 1.44155 8.77569 1.44155C12.8853 1.44155 15.7352 3.79026 15.7352 7.27019C15.7352 9.75312 14.8266 11.1528 13.5978 11.1528C12.8027 11.1528 12.431 10.7118 12.431 10.0886L12.3514 4.5484H10.7922L10.7929 5.20988C10.5438 4.59923 9.39524 4.27918 8.29038 4.27918C6.1736 4.27918 4.69702 5.9089 4.69702 8.23844C4.69702 10.6734 6.14263 12.3127 8.29038 12.3127C9.50882 12.3127 10.4691 11.7567 10.9131 10.7885H10.9957C11.1196 11.7471 12.1316 12.399 13.3087 12.399C15.7249 12.399 17.1912 10.3571 17.1912 7.28936C17.1912 3.06168 13.7114 0.233643 8.90993 0.233643C3.89161 0.233643 0.380859 3.44515 0.380859 8.22885Z"
                    fill="#606060"
                  />
                </svg>
              </a>
            </li>
            <li>
              <a href="#">
                <svg
                  width="19"
                  height="18"
                  viewBox="0 0 19 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M9.19191 13.6469C9.19191 13.6469 5.2202 17.0236 4.19117 16.276C3.16214 15.5283 5.14623 10.7076 5.14623 10.7076C5.14623 10.7076 0.718363 7.9402 1.10054 6.76398C1.48271 5.58777 6.69154 5.95156 6.69154 5.95156C6.69154 5.95156 7.94173 0.885254 9.19191 0.885254C10.4421 0.885254 11.6923 5.95156 11.6923 5.95156C11.6923 5.95156 16.8929 5.56263 17.2833 6.76398C17.6736 7.96533 13.2376 10.7076 13.2376 10.7076C13.2376 10.7076 15.1851 15.5549 14.1927 16.276C13.2002 16.997 9.19191 13.6469 9.19191 13.6469Z"
                    stroke="#606060"
                    stroke-width="1.5"
                  />
                </svg>
              </a>
            </li>
            <li>
              <a href="#">
                <svg
                  width="4"
                  height="17"
                  viewBox="0 0 4 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M1.72266 3.84009C2.55108 3.84009 3.22266 3.16851 3.22266 2.34009C3.22266 1.51166 2.55108 0.840088 1.72266 0.840088C0.894229 0.840088 0.222656 1.51166 0.222656 2.34009C0.222656 3.16851 0.894229 3.84009 1.72266 3.84009Z"
                    fill="#606060"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M1.72266 10.3401C2.55108 10.3401 3.22266 9.66851 3.22266 8.84009C3.22266 8.01166 2.55108 7.34009 1.72266 7.34009C0.894229 7.34009 0.222656 8.01166 0.222656 8.84009C0.222656 9.66851 0.894229 10.3401 1.72266 10.3401Z"
                    fill="#606060"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M1.72266 16.8401C2.55108 16.8401 3.22266 16.1685 3.22266 15.3401C3.22266 14.5117 2.55108 13.8401 1.72266 13.8401C0.894229 13.8401 0.222656 14.5117 0.222656 15.3401C0.222656 16.1685 0.894229 16.8401 1.72266 16.8401Z"
                    fill="#606060"
                  />
                </svg>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
