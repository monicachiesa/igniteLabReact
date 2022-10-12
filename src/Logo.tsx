import { SVGAttributes } from "react"
import * as React from "react"


interface LogoProps extends SVGAttributes<HTMLOrSVGElement> { }

function Logo(props: LogoProps) {
    return (
        <svg
            width={106}
            height={120}
            viewBox="0 0 154 181"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <path
                d="M6.943 149.727V173h-4.92v-23.273h4.92zm11.821 30.182c-1.568 0-2.913-.216-4.034-.648-1.114-.424-2-1.003-2.659-1.738a5.347 5.347 0 01-1.284-2.478l4.477-.602c.137.349.353.674.648.977.295.303.685.546 1.17.728.493.189 1.091.284 1.796.284 1.053 0 1.92-.258 2.602-.773.69-.507 1.034-1.36 1.034-2.557v-3.193h-.204c-.212.485-.53.943-.955 1.375-.424.432-.97.784-1.636 1.057-.667.273-1.462.409-2.387.409-1.31 0-2.503-.303-3.58-.909-1.067-.614-1.92-1.549-2.556-2.807-.629-1.265-.943-2.864-.943-4.795 0-1.978.322-3.629.966-4.955.644-1.326 1.5-2.318 2.568-2.977a6.638 6.638 0 013.534-.989c.977 0 1.795.167 2.455.5.659.326 1.189.735 1.59 1.227.41.485.724.963.944 1.432h.181v-2.932h4.807v17.625c0 1.485-.363 2.728-1.09 3.728-.728 1-1.735 1.75-3.023 2.25-1.28.507-2.754.761-4.42.761zm.102-10.795c.78 0 1.44-.194 1.978-.58.545-.394.962-.954 1.25-1.682.295-.735.443-1.613.443-2.636 0-1.023-.144-1.909-.432-2.659-.288-.758-.704-1.345-1.25-1.762-.545-.416-1.208-.625-1.989-.625-.795 0-1.465.216-2.01.648-.546.424-.96 1.015-1.24 1.773-.28.757-.42 1.632-.42 2.625 0 1.007.14 1.879.42 2.614.288.727.701 1.291 1.24 1.693.545.394 1.215.591 2.01.591zm17.126-6.205V173H31.15v-17.455h4.613v3.08h.205a4.87 4.87 0 011.943-2.409c.909-.599 2.011-.898 3.307-.898 1.212 0 2.269.265 3.17.796.902.53 1.602 1.288 2.102 2.272.5.978.75 2.144.75 3.5V173h-4.84v-10.25c.007-1.068-.266-1.902-.819-2.5-.553-.606-1.314-.909-2.284-.909-.651 0-1.227.14-1.727.42-.492.281-.879.69-1.16 1.228-.272.53-.412 1.17-.42 1.92zM51.056 173v-17.455h4.84V173h-4.84zm2.432-19.705a2.63 2.63 0 01-1.853-.715c-.507-.485-.761-1.065-.761-1.739 0-.667.254-1.239.761-1.716a2.607 2.607 0 011.853-.727c.72 0 1.333.242 1.84.727.516.477.773 1.049.773 1.716 0 .674-.257 1.254-.772 1.739-.508.477-1.122.715-1.841.715zm15.57 2.25v3.637H58.55v-3.637h10.51zm-8.124-4.181h4.84v16.272c0 .447.069.796.205 1.046.136.242.326.413.568.511.25.099.538.148.864.148.227 0 .454-.019.682-.057l.523-.102.76 3.602c-.242.076-.582.163-1.022.261-.44.107-.973.171-1.602.194-1.167.045-2.19-.11-3.068-.466-.872-.356-1.55-.909-2.034-1.659-.485-.75-.724-1.697-.716-2.841v-16.909zm19.045 21.977c-1.795 0-3.34-.364-4.636-1.091a7.472 7.472 0 01-2.977-3.114c-.698-1.348-1.046-2.943-1.046-4.784 0-1.795.349-3.371 1.046-4.727.696-1.356 1.677-2.413 2.943-3.17 1.272-.758 2.765-1.137 4.477-1.137 1.151 0 2.223.186 3.216.557 1 .364 1.871.913 2.614 1.648.75.735 1.333 1.659 1.75 2.772.416 1.107.624 2.402.624 3.887v1.329H73.254v-3h10.182c0-.697-.152-1.314-.455-1.852a3.254 3.254 0 00-1.261-1.261c-.53-.311-1.148-.466-1.852-.466-.735 0-1.387.17-1.955.511-.56.334-1 .784-1.318 1.352a3.821 3.821 0 00-.489 1.875v2.853c0 .863.16 1.61.477 2.238a3.493 3.493 0 001.375 1.455c.591.341 1.292.511 2.103.511.537 0 1.03-.075 1.477-.227.447-.152.83-.379 1.148-.682.318-.303.56-.674.727-1.113l4.477.295a6.112 6.112 0 01-1.397 2.818c-.698.796-1.599 1.417-2.705 1.864-1.099.439-2.368.659-3.807.659zM98.648 173v-23.273h4.92v19.216h9.977V173H98.648zm23.042.33c-1.113 0-2.106-.194-2.977-.58a4.786 4.786 0 01-2.068-1.739c-.5-.772-.75-1.734-.75-2.886 0-.97.178-1.784.534-2.443a4.319 4.319 0 011.455-1.591 7.02 7.02 0 012.09-.909 15.85 15.85 0 012.478-.432 64.471 64.471 0 002.454-.295c.621-.099 1.072-.243 1.353-.432.28-.19.42-.47.42-.841v-.068c0-.72-.227-1.277-.682-1.671-.447-.394-1.083-.591-1.909-.591-.871 0-1.564.193-2.079.58-.516.379-.857.856-1.023 1.432l-4.477-.364c.227-1.061.674-1.977 1.34-2.75.667-.78 1.527-1.379 2.58-1.795 1.061-.425 2.288-.637 3.682-.637.969 0 1.898.114 2.784.341a7.29 7.29 0 012.375 1.057 5.14 5.14 0 011.648 1.841c.401.742.602 1.632.602 2.67V173h-4.591v-2.42h-.136a4.96 4.96 0 01-1.125 1.443 5.21 5.21 0 01-1.694.966c-.659.227-1.42.341-2.284.341zm1.387-3.341c.712 0 1.341-.141 1.886-.421a3.333 3.333 0 001.284-1.159 2.986 2.986 0 00.466-1.648v-1.852c-.151.099-.36.189-.625.273-.258.076-.549.148-.875.216-.326.06-.651.117-.977.17l-.887.125a6.003 6.003 0 00-1.488.398c-.424.182-.754.428-.989.739-.235.303-.352.681-.352 1.136 0 .659.239 1.163.716 1.511.485.341 1.098.512 1.841.512zM135.366 173v-23.273h4.841v8.75h.148c.212-.469.519-.947.921-1.432.409-.492.939-.901 1.59-1.227.66-.333 1.478-.5 2.455-.5 1.273 0 2.447.334 3.523 1 1.076.659 1.935 1.655 2.579 2.989.644 1.326.966 2.988.966 4.988 0 1.947-.314 3.591-.943 4.932-.621 1.334-1.47 2.345-2.545 3.034-1.069.682-2.266 1.023-3.591 1.023-.94 0-1.739-.155-2.398-.466-.652-.31-1.186-.701-1.602-1.17a5.975 5.975 0 01-.955-1.443h-.216V173h-4.773zm4.739-8.727c0 1.038.144 1.943.432 2.716.288.772.704 1.375 1.25 1.806.545.425 1.208.637 1.989.637.787 0 1.454-.216 2-.648.545-.439.958-1.045 1.238-1.818.288-.78.432-1.678.432-2.693 0-1.008-.14-1.894-.42-2.659-.281-.766-.694-1.364-1.239-1.796-.546-.432-1.216-.648-2.011-.648-.788 0-1.455.209-2 .625-.538.417-.951 1.008-1.239 1.773-.288.765-.432 1.667-.432 2.705z"
                fill="#fff"
            />
            <path
                d="M129 62.682c0-7.287-9.126-14.193-23.117-18.475 3.229-14.26 1.794-25.606-4.529-29.238-1.457-.852-3.161-1.255-5.022-1.255v5c1.031 0 1.86.201 2.556.583 3.049 1.748 4.372 8.408 3.341 16.973-.247 2.107-.651 4.327-1.144 6.591-4.394-1.076-9.193-1.905-14.237-2.443-3.027-4.148-6.166-7.915-9.328-11.211 7.31-6.794 14.17-10.516 18.834-10.516v-5c-6.166 0-14.237 4.395-22.399 12.018-8.161-7.578-16.233-11.928-22.399-11.928v5c4.641 0 11.525 3.7 18.834 10.448a105.91 105.91 0 00-9.26 11.189c-5.067.538-9.865 1.367-14.26 2.466a67.652 67.652 0 01-1.166-6.502c-1.054-8.565.247-15.224 3.274-16.996.672-.403 1.547-.583 2.578-.583v-5c-1.883 0-3.587.404-5.067 1.256-6.3 3.632-7.713 14.955-4.462 29.17C28.08 48.534 19 55.418 19 62.682c0 7.287 9.126 14.193 23.117 18.475-3.23 14.26-1.794 25.606 4.529 29.238 1.457.852 3.161 1.256 5.045 1.256 6.165 0 14.237-4.395 22.399-12.018 8.161 7.578 16.233 11.928 22.399 11.928 1.883 0 3.587-.404 5.067-1.256 6.301-3.632 7.713-14.955 4.462-29.17C119.919 76.853 129 69.947 129 62.682zM99.807 47.727c-.83 2.892-1.86 5.874-3.027 8.857a106.057 106.057 0 00-2.937-5.382c-1.031-1.793-2.13-3.542-3.229-5.246a101.16 101.16 0 019.193 1.771zM89.538 71.606c-1.749 3.027-3.542 5.897-5.403 8.565-3.341.291-6.727.448-10.135.448-3.386 0-6.771-.157-10.09-.426a123.604 123.604 0 01-5.426-8.52 116.833 116.833 0 01-4.663-8.924c1.39-3.004 2.96-6.009 4.64-8.946 1.75-3.027 3.544-5.897 5.404-8.565 3.341-.291 6.727-.448 10.135-.448 3.386 0 6.771.157 10.09.426a123.604 123.604 0 015.426 8.52 116.833 116.833 0 014.663 8.924 125.557 125.557 0 01-4.64 8.946zm7.242-2.915a96.104 96.104 0 013.094 8.924 100.637 100.637 0 01-9.237 1.794c1.098-1.727 2.197-3.498 3.228-5.314a127.368 127.368 0 002.915-5.404zM74.045 92.615a92.429 92.429 0 01-6.233-7.175c2.018.09 4.08.157 6.166.157 2.107 0 4.192-.045 6.233-.157a87.535 87.535 0 01-6.166 7.175zM57.363 79.409c-3.184-.471-6.255-1.054-9.193-1.772.83-2.892 1.861-5.874 3.027-8.856.92 1.793 1.884 3.587 2.938 5.381a148.548 148.548 0 003.228 5.247zm16.57-46.66a92.45 92.45 0 016.233 7.175c-2.018-.09-4.08-.157-6.166-.157-2.108 0-4.193.045-6.233.157a87.554 87.554 0 016.166-7.175zM57.34 45.956c-1.099 1.726-2.197 3.497-3.229 5.314a126.667 126.667 0 00-2.915 5.38 96.093 96.093 0 01-3.094-8.923c2.937-.695 6.032-1.3 9.238-1.771zM37.049 74.027c-7.937-3.385-13.071-7.825-13.071-11.345 0-3.52 5.134-7.982 13.071-11.345 1.929-.83 4.036-1.57 6.211-2.265 1.278 4.395 2.96 8.969 5.045 13.655-2.063 4.664-3.722 9.215-4.978 13.587a68.118 68.118 0 01-6.278-2.287zm12.063 32.041c-3.05-1.749-4.372-8.408-3.34-16.973.246-2.108.65-4.328 1.143-6.592 4.394 1.076 9.193 1.906 14.238 2.444 3.026 4.148 6.165 7.915 9.327 11.21-7.31 6.794-14.17 10.516-18.834 10.516-1.01-.022-1.861-.224-2.534-.605zm53.184-17.085c1.054 8.565-.247 15.224-3.274 16.995-.672.404-1.547.583-2.578.583-4.641 0-11.525-3.699-18.834-10.448a105.897 105.897 0 009.26-11.189c5.067-.538 9.865-1.367 14.26-2.466.516 2.264.919 4.44 1.166 6.525zm8.632-14.956c-1.928.83-4.036 1.57-6.211 2.265-1.278-4.395-2.959-8.969-5.044-13.655 2.062-4.663 3.722-9.215 4.977-13.587a71.093 71.093 0 016.301 2.287c7.937 3.385 13.071 7.825 13.071 11.345-.022 3.52-5.157 7.982-13.094 11.345z"
                fill="#61DAFB"
            />
            <path
                d="M73.978 72.929c5.659 0 10.246-4.588 10.246-10.247s-4.587-10.247-10.246-10.247c-5.66 0-10.247 4.588-10.247 10.247 0 5.66 4.587 10.247 10.247 10.247z"
                fill="#61DAFB"
            />
        </svg>
    )
}

export default Logo
