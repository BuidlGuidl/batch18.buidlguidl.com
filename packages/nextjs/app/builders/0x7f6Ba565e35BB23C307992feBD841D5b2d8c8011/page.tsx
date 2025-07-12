import Link from "next/link";
import type { NextPage } from "next";
import { Address } from "~~/components/scaffold-eth";

const Home: NextPage = () => {
  return (
    <>
      <div className="flex items-center flex-col grow pt-10">
        <div className="px-5 justify-center items-center flex flex-col bg-base-100 w-full max-w-3xl rounded-3xl">
          {/* 添加头像 */}
          <img
            src="https://avatars.githubusercontent.com/u/18190481?s=400&u=43a299844e466375bb4fe2235125925bff43b9ff&v=4"
            alt="Avatar"
            className="rounded-full w-32 h-32 mb-4"
          />
          <span className="text-2xl font-bold mb-2">My name is Kong</span>
          {/* 添加欢迎语和地址 */}
          <span className="text-2xl font-bold mb-2">Welcome to my page!</span>
          <span className="text-lg mb-4">This is my personal page on Batch #18.</span>
          {/* 使用 Address 组件显示地址 */}
          <span className="text-lg font-bold">My Ethereum Address:</span>
          <Address address="0x7f6Ba565e35BB23C307992feBD841D5b2d8c8011" onlyEnsOrAddress />
          {/* 添加关于我的信息和联系方式 */}
          <div className="text-2xl font-bold mt-3 mb-3">About Me</div>
          <span className="text-xl max-w-fit font-bold mb-4 mt-2 pr-20 pl-20">
            I am a backend development engineer with 5 years of work experience, specializing in Java and Python for web
            development.
          </span>
          <span className="text-xl max-w-fit font-bold mb-4 mt-2 pr-20 pl-20">
            My passion lies in delving deep into development technologies, constantly exploring new solutions to enhance
            system performance and functionality.
          </span>
          <div className="text-2xl font-bold mt-3 mb-3">Contact Me</div>
          <div className="flex">
            {/* 添加社交媒体链接 */}
            <span className="text-lg font-bold pl-20 pr-20">
              <Link href="https://github.com/fjkang" target="_blank">
                <svg
                  className="w-10 h-10"
                  fill="#ffffff"
                  viewBox="-51.2 -51.2 614.40 614.40"
                  xmlns="http://www.w3.org/2000/svg"
                  transform="matrix(1, 0, 0, 1, 0, 0)"
                  stroke="#ffffff"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                  <g id="SVGRepo_iconCarrier">
                    <title>ionicons-v5_logos</title>
                    <path d="M256,32C132.3,32,32,134.9,32,261.7c0,101.5,64.2,187.5,153.2,217.9a17.56,17.56,0,0,0,3.8.4c8.3,0,11.5-6.1,11.5-11.4,0-5.5-.2-19.9-.3-39.1a102.4,102.4,0,0,1-22.6,2.7c-43.1,0-52.9-33.5-52.9-33.5-10.2-26.5-24.9-33.6-24.9-33.6-19.5-13.7-.1-14.1,1.4-14.1h.1c22.5,2,34.3,23.8,34.3,23.8,11.2,19.6,26.2,25.1,39.6,25.1a63,63,0,0,0,25.6-6c2-14.8,7.8-24.9,14.2-30.7-49.7-5.8-102-25.5-102-113.5,0-25.1,8.7-45.6,23-61.6-2.3-5.8-10-29.2,2.2-60.8a18.64,18.64,0,0,1,5-.5c8.1,0,26.4,3.1,56.6,24.1a208.21,208.21,0,0,1,112.2,0c30.2-21,48.5-24.1,56.6-24.1a18.64,18.64,0,0,1,5,.5c12.2,31.6,4.5,55,2.2,60.8,14.3,16.1,23,36.6,23,61.6,0,88.2-52.4,107.6-102.3,113.3,8,7.1,15.2,21.1,15.2,42.5,0,30.7-.3,55.5-.3,63,0,5.4,3.1,11.5,11.4,11.5a19.35,19.35,0,0,0,4-.4C415.9,449.2,480,363.1,480,261.7,480,134.9,379.7,32,256,32Z"></path>
                  </g>
                </svg>
              </Link>
            </span>
            <span className="text-lg font-bold pl-20 pr-20">
              <Link
                href="https://speedrunethereum.com/builders/0x7f6Ba565e35BB23C307992feBD841D5b2d8c8011"
                target="_blank"
              >
                <svg
                  className="w-10 h-10"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  stroke="#ffffff"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <path
                      d="M14 22V16.9612C14 16.3537 13.7238 15.7791 13.2494 15.3995L11.5 14M11.5 14L13 7.5M11.5 14L10 13M13 7.5L11 7M13 7.5L15.0426 10.7681C15.3345 11.2352 15.8062 11.5612 16.3463 11.6693L18 12M10 13L11 7M10 13L9.40011 16.2994C9.18673 17.473 8.00015 18.2 6.85767 17.8573L4 17M11 7L8.10557 8.44721C7.428 8.786 7 9.47852 7 10.2361V12M14.5 3.5C14.5 4.05228 14.0523 4.5 13.5 4.5C12.9477 4.5 12.5 4.05228 12.5 3.5C12.5 2.94772 12.9477 2.5 13.5 2.5C14.0523 2.5 14.5 2.94772 14.5 3.5Z"
                      stroke="#ffffff"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>{" "}
                  </g>
                </svg>
              </Link>
            </span>
            <span className="text-lg font-bold pl-20 pr-20">
              <Link href="mailto:fjkang1991@gmail.com">
                <svg
                  className="w-10 h-10"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  stroke="#ffffff"
                  stroke-width="0.00024000000000000003"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <path
                      d="M5.85557 6.83962C5.62315 6.71446 5.34204 6.72072 5.11541 6.85608C4.88878 6.99145 4.75 7.23599 4.75 7.49997V17C4.75 17.4142 5.08579 17.75 5.5 17.75C5.91421 17.75 6.25 17.4142 6.25 17V8.75563L11.6444 11.6603C11.8664 11.7799 12.1336 11.7799 12.3556 11.6603L17.75 8.75563V17C17.75 17.4142 18.0858 17.75 18.5 17.75C18.9142 17.75 19.25 17.4142 19.25 17V7.49997C19.25 7.23599 19.1112 6.99145 18.8846 6.85608C18.658 6.72072 18.3769 6.71446 18.1444 6.83962L12 10.1482L5.85557 6.83962Z"
                      fill="#ffffff"
                    ></path>{" "}
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M17.3106 3.7218C13.7773 3.40588 10.2228 3.40588 6.68943 3.7218L5.17208 3.85747C3.54447 4.003 2.2294 5.24642 1.99301 6.86334C1.49501 10.2697 1.49501 13.7303 1.99301 17.1366C2.2294 18.7535 3.54447 19.9969 5.17208 20.1425L6.68943 20.2781C10.2228 20.5941 13.7773 20.5941 17.3106 20.2781L18.8279 20.1425C20.4556 19.9969 21.7706 18.7535 22.007 17.1366C22.505 13.7303 22.505 10.2697 22.007 6.86334C21.7706 5.24642 20.4556 4.003 18.8279 3.85747L17.3106 3.7218ZM6.82301 5.21584C10.2675 4.90787 13.7325 4.90787 17.177 5.21584L18.6944 5.35151C19.6305 5.43521 20.3868 6.15036 20.5228 7.08033C20.9998 10.3427 20.9998 13.6572 20.5228 16.9196C20.3868 17.8496 19.6305 18.5647 18.6944 18.6484L17.177 18.7841C13.7325 19.0921 10.2675 19.0921 6.82301 18.7841L5.30567 18.6484C4.36955 18.5647 3.61319 17.8496 3.47723 16.9196C3.00027 13.6572 3.00027 10.3427 3.47723 7.08033C3.61319 6.15036 4.36955 5.43521 5.30567 5.35151L6.82301 5.21584Z"
                      fill="#ffffff"
                    ></path>{" "}
                  </g>
                </svg>
              </Link>
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
