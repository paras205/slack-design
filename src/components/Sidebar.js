import React from "react";

// TODO: make child list component and use loop to render list
const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-user-profile">
        <div className="user-detail">
          <h4>
            Slack Mockup v1 <span></span>
          </h4>
          <svg
            width="16"
            height="17"
            viewBox="0 0 16 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              opacity="0.6"
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M13.696 7.9605C13.696 5.78236 11.8795 3.53209 9.76759 2.70464C9.55548 1.75127 9.12413 1.03711 8.12451 1.03711C7.12489 1.03711 6.69354 1.75127 6.48143 2.70484C4.36951 3.53229 2.55304 5.78256 2.55304 7.9607V12.3869L1.12451 13.8841C1.12451 14.2111 1.3896 14.476 1.71642 14.476H6.68417C6.68722 15.7839 6.8162 16.115 8.12451 16.115C9.43282 16.115 9.76555 15.7839 9.76861 14.476H14.5326C14.8596 14.476 15.1245 14.2109 15.1245 13.8841L13.696 12.3867V7.9605Z"
              stroke="white"
              stroke-width="1.5"
            />
          </svg>
        </div>
        <div className="user-status">
          <span className="active" /> viduthalai.mani
        </div>
      </div>
      <div className="sidebar-apps"></div>
      <div className="sidebar-search">
        <div className="sidebar-search-form">
          <input placeholder="Jump to..." />
          <svg
            width="16"
            height="13"
            viewBox="0 0 16 13"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M10.9737 10.8172C12.7117 10.8172 14.1206 9.41176 14.1206 7.6781C14.1206 5.94444 12.7117 4.53903 10.9737 4.53903C9.23575 4.53903 7.82684 5.94444 7.82684 7.6781C7.82684 9.41176 9.23575 10.8172 10.9737 10.8172Z"
              stroke="#BBB3BA"
              stroke-width="1.2"
            />
            <path
              d="M13.084 10.1424L14.8111 11.5861"
              stroke="#BBB3BA"
              stroke-width="1.2"
              stroke-linecap="round"
            />
            <path
              d="M0.930054 10.8273H6.7467"
              stroke="#BBB3BA"
              stroke-width="1.2"
              stroke-linecap="round"
            />
            <path
              d="M0.930054 4.80437H6.67115"
              stroke="#BBB3BA"
              stroke-width="1.2"
              stroke-linecap="round"
            />
            <path
              d="M0.930054 7.81584H5.34117"
              stroke="#BBB3BA"
              stroke-width="1.2"
              stroke-linecap="round"
            />
            <path
              d="M0.930054 1.4813H11.1777"
              stroke="#BBB3BA"
              stroke-width="1.2"
              stroke-linecap="round"
            />
          </svg>
        </div>
      </div>
      <div className="sidebar-apps">
        <svg
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="2.4" height="2.4" rx="1.2" fill="#C4C4C4" />
          <rect y="4.80008" width="2.4" height="2.4" rx="1.2" fill="#C4C4C4" />
          <rect y="9.59995" width="2.4" height="2.4" rx="1.2" fill="#C4C4C4" />
          <rect x="4.80011" width="2.4" height="2.4" rx="1.2" fill="#C4C4C4" />
          <rect
            x="4.80011"
            y="4.80008"
            width="2.4"
            height="2.4"
            rx="1.2"
            fill="#C4C4C4"
          />
          <rect
            x="4.80011"
            y="9.59995"
            width="2.4"
            height="2.4"
            rx="1.2"
            fill="#C4C4C4"
          />
          <rect x="9.59998" width="2.4" height="2.4" rx="1.2" fill="#C4C4C4" />
          <rect
            x="9.59998"
            y="4.80008"
            width="2.4"
            height="2.4"
            rx="1.2"
            fill="#C4C4C4"
          />
          <rect
            x="9.59998"
            y="9.59995"
            width="2.4"
            height="2.4"
            rx="1.2"
            fill="#C4C4C4"
          />
        </svg>
        <h5>Apps</h5>
      </div>
      <div className="sidebar-user-list">
        <h4>Chennels</h4>
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g opacity="0.6">
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M8.05374 15.2332C11.7747 15.2332 14.7911 12.2066 14.7911 8.47303C14.7911 4.73949 11.7747 1.71286 8.05374 1.71286C4.33281 1.71286 1.31641 4.73949 1.31641 8.47303C1.31641 12.2066 4.33281 15.2332 8.05374 15.2332Z"
              stroke="white"
              stroke-width="1.49323"
            />
            <path
              d="M8.1413 4.97327V11.7891"
              stroke="white"
              stroke-width="1.19458"
              stroke-linecap="round"
            />
            <path
              d="M4.73334 8.3812H11.5492"
              stroke="white"
              stroke-width="1.19458"
              stroke-linecap="round"
            />
          </g>
        </svg>
      </div>
      <div className="sidebar-user-channel sidebar-items">
        <ul>
          <li>
            <svg
              width="10"
              height="12"
              viewBox="0 0 10 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                opacity="0.6"
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M8.53961 5.67178C8.75018 5.67178 8.92901 5.74179 9.07639 5.88192C9.22379 6.02205 9.29768 6.19221 9.29757 6.39234V10.716C9.29757 10.9161 9.22379 11.0864 9.07658 11.2265C8.92918 11.3666 8.75037 11.4366 8.5398 11.4366H0.96277C0.752365 11.4366 0.573419 11.3665 0.426072 11.2265C0.278752 11.0864 0.205078 10.9161 0.205078 10.716V6.39241C0.205078 6.19213 0.278724 6.02195 0.426072 5.88192C0.573419 5.74179 0.752365 5.67178 0.96277 5.67178H1.21531V4.23048C1.21531 3.30969 1.5625 2.51912 2.25711 1.85853C2.9516 1.19797 3.78299 0.867676 4.75129 0.867676C5.7196 0.867676 6.55083 1.19797 7.24538 1.85856C7.93999 2.51912 8.28718 3.30972 8.28718 4.23048V5.67178H8.53961ZM2.73074 5.67178H6.77182V4.23048C6.77182 3.70006 6.57449 3.24712 6.17997 2.87189C5.78525 2.49656 5.30921 2.30897 4.75136 2.30897C4.19357 2.30897 3.71741 2.49659 3.32272 2.87189C2.92809 3.24714 2.73074 3.70006 2.73074 4.23048V5.67178Z"
                fill="white"
              />
            </svg>
            front-end-devs
          </li>
          <li>
            <svg
              width="10"
              height="12"
              viewBox="0 0 10 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                opacity="0.6"
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M8.53961 5.67178C8.75018 5.67178 8.92901 5.74179 9.07639 5.88192C9.22379 6.02205 9.29768 6.19221 9.29757 6.39234V10.716C9.29757 10.9161 9.22379 11.0864 9.07658 11.2265C8.92918 11.3666 8.75037 11.4366 8.5398 11.4366H0.96277C0.752365 11.4366 0.573419 11.3665 0.426072 11.2265C0.278752 11.0864 0.205078 10.9161 0.205078 10.716V6.39241C0.205078 6.19213 0.278724 6.02195 0.426072 5.88192C0.573419 5.74179 0.752365 5.67178 0.96277 5.67178H1.21531V4.23048C1.21531 3.30969 1.5625 2.51912 2.25711 1.85853C2.9516 1.19797 3.78299 0.867676 4.75129 0.867676C5.7196 0.867676 6.55083 1.19797 7.24538 1.85856C7.93999 2.51912 8.28718 3.30972 8.28718 4.23048V5.67178H8.53961ZM2.73074 5.67178H6.77182V4.23048C6.77182 3.70006 6.57449 3.24712 6.17997 2.87189C5.78525 2.49656 5.30921 2.30897 4.75136 2.30897C4.19357 2.30897 3.71741 2.49659 3.32272 2.87189C2.92809 3.24714 2.73074 3.70006 2.73074 4.23048V5.67178Z"
                fill="white"
              />
            </svg>
            it-team-internal-commu...
          </li>
          <li>
            <svg
              width="9"
              height="11"
              viewBox="0 0 9 11"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                opacity="0.6"
                d="M5.475 4.4H3.6225L3.135 6.845H4.9875L5.475 4.4ZM8.31 3.4175L8.2125 3.98C8.1875 4.125 8.1275 4.2325 8.0325 4.3025C7.9425 4.3675 7.8025 4.4 7.6125 4.4H6.5775L6.09 6.845H7.4325C7.5775 6.845 7.68 6.8875 7.74 6.9725C7.805 7.0525 7.8225 7.195 7.7925 7.4L7.725 7.8275H5.9475L5.3175 11H4.71C4.645 11 4.585 10.985 4.53 10.955C4.475 10.925 4.4275 10.885 4.3875 10.835C4.3525 10.785 4.3275 10.725 4.3125 10.655C4.2975 10.585 4.2975 10.5075 4.3125 10.4225L4.845 7.8275H2.9925L2.46 10.49C2.43 10.675 2.3575 10.8075 2.2425 10.8875C2.1275 10.9625 1.9975 11 1.8525 11H1.2525L1.89 7.8275H0.795C0.655 7.8275 0.5525 7.7875 0.4875 7.7075C0.4275 7.6225 0.4125 7.4775 0.4425 7.2725L0.5025 6.845H2.0325L2.52 4.4H0.78L0.8775 3.845C0.9025 3.7 0.96 3.5925 1.05 3.5225C1.145 3.4525 1.2875 3.4175 1.4775 3.4175H2.6625L3.2025 0.732499C3.2325 0.5825 3.3 0.465 3.405 0.38C3.515 0.295 3.645 0.252499 3.795 0.252499H4.395L3.765 3.4175H5.6175L6.2475 0.252499H6.84C6.985 0.252499 7.0975 0.299999 7.1775 0.395C7.2625 0.489999 7.2925 0.609999 7.2675 0.755L6.72 3.4175H8.31Z"
                fill="white"
              />
            </svg>
            general
          </li>
          <li className="active">
            <svg
              width="9"
              height="11"
              viewBox="0 0 9 11"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                opacity="0.6"
                d="M5.475 4.4H3.6225L3.135 6.845H4.9875L5.475 4.4ZM8.31 3.4175L8.2125 3.98C8.1875 4.125 8.1275 4.2325 8.0325 4.3025C7.9425 4.3675 7.8025 4.4 7.6125 4.4H6.5775L6.09 6.845H7.4325C7.5775 6.845 7.68 6.8875 7.74 6.9725C7.805 7.0525 7.8225 7.195 7.7925 7.4L7.725 7.8275H5.9475L5.3175 11H4.71C4.645 11 4.585 10.985 4.53 10.955C4.475 10.925 4.4275 10.885 4.3875 10.835C4.3525 10.785 4.3275 10.725 4.3125 10.655C4.2975 10.585 4.2975 10.5075 4.3125 10.4225L4.845 7.8275H2.9925L2.46 10.49C2.43 10.675 2.3575 10.8075 2.2425 10.8875C2.1275 10.9625 1.9975 11 1.8525 11H1.2525L1.89 7.8275H0.795C0.655 7.8275 0.5525 7.7875 0.4875 7.7075C0.4275 7.6225 0.4125 7.4775 0.4425 7.2725L0.5025 6.845H2.0325L2.52 4.4H0.78L0.8775 3.845C0.9025 3.7 0.96 3.5925 1.05 3.5225C1.145 3.4525 1.2875 3.4175 1.4775 3.4175H2.6625L3.2025 0.732499C3.2325 0.5825 3.3 0.465 3.405 0.38C3.515 0.295 3.645 0.252499 3.795 0.252499H4.395L3.765 3.4175H5.6175L6.2475 0.252499H6.84C6.985 0.252499 7.0975 0.299999 7.1775 0.395C7.2625 0.489999 7.2925 0.609999 7.2675 0.755L6.72 3.4175H8.31Z"
                fill="white"
              />
            </svg>
            graphic-designers
          </li>
          <li>
            <svg
              width="9"
              height="11"
              viewBox="0 0 9 11"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                opacity="0.6"
                d="M5.475 4.4H3.6225L3.135 6.845H4.9875L5.475 4.4ZM8.31 3.4175L8.2125 3.98C8.1875 4.125 8.1275 4.2325 8.0325 4.3025C7.9425 4.3675 7.8025 4.4 7.6125 4.4H6.5775L6.09 6.845H7.4325C7.5775 6.845 7.68 6.8875 7.74 6.9725C7.805 7.0525 7.8225 7.195 7.7925 7.4L7.725 7.8275H5.9475L5.3175 11H4.71C4.645 11 4.585 10.985 4.53 10.955C4.475 10.925 4.4275 10.885 4.3875 10.835C4.3525 10.785 4.3275 10.725 4.3125 10.655C4.2975 10.585 4.2975 10.5075 4.3125 10.4225L4.845 7.8275H2.9925L2.46 10.49C2.43 10.675 2.3575 10.8075 2.2425 10.8875C2.1275 10.9625 1.9975 11 1.8525 11H1.2525L1.89 7.8275H0.795C0.655 7.8275 0.5525 7.7875 0.4875 7.7075C0.4275 7.6225 0.4125 7.4775 0.4425 7.2725L0.5025 6.845H2.0325L2.52 4.4H0.78L0.8775 3.845C0.9025 3.7 0.96 3.5925 1.05 3.5225C1.145 3.4525 1.2875 3.4175 1.4775 3.4175H2.6625L3.2025 0.732499C3.2325 0.5825 3.3 0.465 3.405 0.38C3.515 0.295 3.645 0.252499 3.795 0.252499H4.395L3.765 3.4175H5.6175L6.2475 0.252499H6.84C6.985 0.252499 7.0975 0.299999 7.1775 0.395C7.2625 0.489999 7.2925 0.609999 7.2675 0.755L6.72 3.4175H8.31Z"
                fill="white"
              />
            </svg>
            product-designers
          </li>
          <li>
            <svg
              width="9"
              height="11"
              viewBox="0 0 9 11"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                opacity="0.6"
                d="M5.475 4.4H3.6225L3.135 6.845H4.9875L5.475 4.4ZM8.31 3.4175L8.2125 3.98C8.1875 4.125 8.1275 4.2325 8.0325 4.3025C7.9425 4.3675 7.8025 4.4 7.6125 4.4H6.5775L6.09 6.845H7.4325C7.5775 6.845 7.68 6.8875 7.74 6.9725C7.805 7.0525 7.8225 7.195 7.7925 7.4L7.725 7.8275H5.9475L5.3175 11H4.71C4.645 11 4.585 10.985 4.53 10.955C4.475 10.925 4.4275 10.885 4.3875 10.835C4.3525 10.785 4.3275 10.725 4.3125 10.655C4.2975 10.585 4.2975 10.5075 4.3125 10.4225L4.845 7.8275H2.9925L2.46 10.49C2.43 10.675 2.3575 10.8075 2.2425 10.8875C2.1275 10.9625 1.9975 11 1.8525 11H1.2525L1.89 7.8275H0.795C0.655 7.8275 0.5525 7.7875 0.4875 7.7075C0.4275 7.6225 0.4125 7.4775 0.4425 7.2725L0.5025 6.845H2.0325L2.52 4.4H0.78L0.8775 3.845C0.9025 3.7 0.96 3.5925 1.05 3.5225C1.145 3.4525 1.2875 3.4175 1.4775 3.4175H2.6625L3.2025 0.732499C3.2325 0.5825 3.3 0.465 3.405 0.38C3.515 0.295 3.645 0.252499 3.795 0.252499H4.395L3.765 3.4175H5.6175L6.2475 0.252499H6.84C6.985 0.252499 7.0975 0.299999 7.1775 0.395C7.2625 0.489999 7.2925 0.609999 7.2675 0.755L6.72 3.4175H8.31Z"
                fill="white"
              />
            </svg>
            private-chennel
          </li>
          <li>
            <svg
              width="9"
              height="11"
              viewBox="0 0 9 11"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                opacity="0.6"
                d="M5.475 4.4H3.6225L3.135 6.845H4.9875L5.475 4.4ZM8.31 3.4175L8.2125 3.98C8.1875 4.125 8.1275 4.2325 8.0325 4.3025C7.9425 4.3675 7.8025 4.4 7.6125 4.4H6.5775L6.09 6.845H7.4325C7.5775 6.845 7.68 6.8875 7.74 6.9725C7.805 7.0525 7.8225 7.195 7.7925 7.4L7.725 7.8275H5.9475L5.3175 11H4.71C4.645 11 4.585 10.985 4.53 10.955C4.475 10.925 4.4275 10.885 4.3875 10.835C4.3525 10.785 4.3275 10.725 4.3125 10.655C4.2975 10.585 4.2975 10.5075 4.3125 10.4225L4.845 7.8275H2.9925L2.46 10.49C2.43 10.675 2.3575 10.8075 2.2425 10.8875C2.1275 10.9625 1.9975 11 1.8525 11H1.2525L1.89 7.8275H0.795C0.655 7.8275 0.5525 7.7875 0.4875 7.7075C0.4275 7.6225 0.4125 7.4775 0.4425 7.2725L0.5025 6.845H2.0325L2.52 4.4H0.78L0.8775 3.845C0.9025 3.7 0.96 3.5925 1.05 3.5225C1.145 3.4525 1.2875 3.4175 1.4775 3.4175H2.6625L3.2025 0.732499C3.2325 0.5825 3.3 0.465 3.405 0.38C3.515 0.295 3.645 0.252499 3.795 0.252499H4.395L3.765 3.4175H5.6175L6.2475 0.252499H6.84C6.985 0.252499 7.0975 0.299999 7.1775 0.395C7.2625 0.489999 7.2925 0.609999 7.2675 0.755L6.72 3.4175H8.31Z"
                fill="white"
              />
            </svg>
            slack-help
          </li>
          <li>
            <svg
              width="9"
              height="11"
              viewBox="0 0 9 11"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                opacity="0.6"
                d="M5.475 4.4H3.6225L3.135 6.845H4.9875L5.475 4.4ZM8.31 3.4175L8.2125 3.98C8.1875 4.125 8.1275 4.2325 8.0325 4.3025C7.9425 4.3675 7.8025 4.4 7.6125 4.4H6.5775L6.09 6.845H7.4325C7.5775 6.845 7.68 6.8875 7.74 6.9725C7.805 7.0525 7.8225 7.195 7.7925 7.4L7.725 7.8275H5.9475L5.3175 11H4.71C4.645 11 4.585 10.985 4.53 10.955C4.475 10.925 4.4275 10.885 4.3875 10.835C4.3525 10.785 4.3275 10.725 4.3125 10.655C4.2975 10.585 4.2975 10.5075 4.3125 10.4225L4.845 7.8275H2.9925L2.46 10.49C2.43 10.675 2.3575 10.8075 2.2425 10.8875C2.1275 10.9625 1.9975 11 1.8525 11H1.2525L1.89 7.8275H0.795C0.655 7.8275 0.5525 7.7875 0.4875 7.7075C0.4275 7.6225 0.4125 7.4775 0.4425 7.2725L0.5025 6.845H2.0325L2.52 4.4H0.78L0.8775 3.845C0.9025 3.7 0.96 3.5925 1.05 3.5225C1.145 3.4525 1.2875 3.4175 1.4775 3.4175H2.6625L3.2025 0.732499C3.2325 0.5825 3.3 0.465 3.405 0.38C3.515 0.295 3.645 0.252499 3.795 0.252499H4.395L3.765 3.4175H5.6175L6.2475 0.252499H6.84C6.985 0.252499 7.0975 0.299999 7.1775 0.395C7.2625 0.489999 7.2925 0.609999 7.2675 0.755L6.72 3.4175H8.31Z"
                fill="white"
              />
            </svg>
            back-end developers
          </li>
          <li className="active">
            <svg
              width="9"
              height="11"
              viewBox="0 0 9 11"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                opacity="0.6"
                d="M5.475 4.4H3.6225L3.135 6.845H4.9875L5.475 4.4ZM8.31 3.4175L8.2125 3.98C8.1875 4.125 8.1275 4.2325 8.0325 4.3025C7.9425 4.3675 7.8025 4.4 7.6125 4.4H6.5775L6.09 6.845H7.4325C7.5775 6.845 7.68 6.8875 7.74 6.9725C7.805 7.0525 7.8225 7.195 7.7925 7.4L7.725 7.8275H5.9475L5.3175 11H4.71C4.645 11 4.585 10.985 4.53 10.955C4.475 10.925 4.4275 10.885 4.3875 10.835C4.3525 10.785 4.3275 10.725 4.3125 10.655C4.2975 10.585 4.2975 10.5075 4.3125 10.4225L4.845 7.8275H2.9925L2.46 10.49C2.43 10.675 2.3575 10.8075 2.2425 10.8875C2.1275 10.9625 1.9975 11 1.8525 11H1.2525L1.89 7.8275H0.795C0.655 7.8275 0.5525 7.7875 0.4875 7.7075C0.4275 7.6225 0.4125 7.4775 0.4425 7.2725L0.5025 6.845H2.0325L2.52 4.4H0.78L0.8775 3.845C0.9025 3.7 0.96 3.5925 1.05 3.5225C1.145 3.4525 1.2875 3.4175 1.4775 3.4175H2.6625L3.2025 0.732499C3.2325 0.5825 3.3 0.465 3.405 0.38C3.515 0.295 3.645 0.252499 3.795 0.252499H4.395L3.765 3.4175H5.6175L6.2475 0.252499H6.84C6.985 0.252499 7.0975 0.299999 7.1775 0.395C7.2625 0.489999 7.2925 0.609999 7.2675 0.755L6.72 3.4175H8.31Z"
                fill="white"
              />
            </svg>
            IT Support
          </li>
        </ul>
      </div>
      <div className="add_chennel">
        <svg
          width="9"
          height="9"
          viewBox="0 0 9 9"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4.14136 0.973389V7.78924"
            stroke="white"
            stroke-width="1.19458"
            stroke-linecap="round"
          />
          <path
            d="M0.733398 4.38132H7.54925"
            stroke="white"
            stroke-width="1.19458"
            stroke-linecap="round"
          />
        </svg>
        Add a chennel
      </div>
      <div className="sidebar-user-list">
        <h4>Direct Messages</h4>
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g opacity="0.6">
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M8.05374 15.2332C11.7747 15.2332 14.7911 12.2066 14.7911 8.47303C14.7911 4.73949 11.7747 1.71286 8.05374 1.71286C4.33281 1.71286 1.31641 4.73949 1.31641 8.47303C1.31641 12.2066 4.33281 15.2332 8.05374 15.2332Z"
              stroke="white"
              stroke-width="1.49323"
            />
            <path
              d="M8.1413 4.97327V11.7891"
              stroke="white"
              stroke-width="1.19458"
              stroke-linecap="round"
            />
            <path
              d="M4.73334 8.3812H11.5492"
              stroke="white"
              stroke-width="1.19458"
              stroke-linecap="round"
            />
          </g>
        </svg>
      </div>
      <div className="sidebar-direct-mesage sidebar-items">
        <ul>
          <li>
            <svg
              width="11"
              height="10"
              viewBox="0 0 11 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M5.73989 9.2215C5.73989 9.2215 5.56888 9.31464 5.4567 9.2215C5.34453 9.112 4.9178 8.68253 4.9178 8.68253C4.15065 7.98776 1.36435 4.96625 1.20513 4.56821C1.04592 4.17016 0.966309 3.76127 0.966309 3.34151C0.966309 2.63227 1.20875 2.03159 1.69364 1.53946C2.17853 1.04733 2.78283 0.80127 3.50655 0.80127C4.34606 0.80127 4.88496 1.62563 5.59085 2.24146C6.26096 1.71762 6.83564 0.80127 7.67515 0.80127C8.39887 0.80127 9.00317 1.04733 9.48806 1.53946C9.97295 2.03159 10.2154 2.63227 10.2154 3.34151C10.2154 3.90601 10.0272 4.49222 9.65089 5.10014C9.27456 5.70806 7.26264 7.80683 6.26391 8.70424L5.73989 9.2215Z"
                fill="#33AB78"
              />
            </svg>
            Slackbot
          </li>
          <li>
            <svg
              width="9"
              height="9"
              viewBox="0 0 9 9"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="4.5" cy="4.5" r="4.5" fill="#33AB78" />
            </svg>
            viduthalai.mani (you)
          </li>
        </ul>
      </div>
      <div className="sidebar-user-list sidebar-recent-apps">
        <h4>Recent Apps</h4>
      </div>
      <div className="sidebar-direct-mesage sidebar-recent-items sidebar-items">
        <ul>
          <li>
            <a href="#">
              <svg
                width="11"
                height="10"
                viewBox="0 0 11 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M5.73989 9.2215C5.73989 9.2215 5.56888 9.31464 5.4567 9.2215C5.34453 9.112 4.9178 8.68253 4.9178 8.68253C4.15065 7.98776 1.36435 4.96625 1.20513 4.56821C1.04592 4.17016 0.966309 3.76127 0.966309 3.34151C0.966309 2.63227 1.20875 2.03159 1.69364 1.53946C2.17853 1.04733 2.78283 0.80127 3.50655 0.80127C4.34606 0.80127 4.88496 1.62563 5.59085 2.24146C6.26096 1.71762 6.83564 0.80127 7.67515 0.80127C8.39887 0.80127 9.00317 1.04733 9.48806 1.53946C9.97295 2.03159 10.2154 2.63227 10.2154 3.34151C10.2154 3.90601 10.0272 4.49222 9.65089 5.10014C9.27456 5.70806 7.26264 7.80683 6.26391 8.70424L5.73989 9.2215Z"
                  fill="#33AB78"
                />
              </svg>
              greetbot
            </a>
            <span>3</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;