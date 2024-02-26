interface QwikLogoProps {
  width?: number;
  height?: number;
  id: string;
}

export const QwikLogo = ({ width = 25, height = 23, id }: QwikLogoProps) => (
  <svg
    height={height}
    preserveAspectRatio="xMidYMid"
    viewBox="-3.523 -.15 262.378 275.068"
    width={width}
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
  >
    <linearGradient id={`a_${id}`}>
      <stop offset="0" stop-color="#4340c4" />
      <stop offset=".12" stop-color="#4642c8" />
      <stop offset="1" stop-color="#594ee4" />
    </linearGradient>
    <linearGradient
      id={`b_${id}`}
      x1="22.347%"
      x2="77.517%"
      xlink:href="#a"
      y1="49.545%"
      y2="50.388%"
    />
    <linearGradient
      id={`c_${id}`}
      x1="38.874%"
      x2="60.879%"
      y1="49.845%"
      y2="50.385%"
    >
      <stop offset="0" stop-color="#4340c4" />
      <stop offset=".74" stop-color="#534adb" />
      <stop offset="1" stop-color="#594ee4" />
    </linearGradient>
    <linearGradient
      id={`d_${id}`}
      x1="-.004%"
      x2="100.123%"
      y1="49.529%"
      y2="50.223%"
    >
      <stop offset="0" stop-color="#4340c4" />
      <stop offset=".23" stop-color="#4340c4" />
      <stop offset=".6" stop-color="#4f48d5" />
      <stop offset="1" stop-color="#594ee4" />
    </linearGradient>
    <linearGradient
      id={`e_${id}`}
      x1="35.4%"
      x2="64.895%"
      y1="49.459%"
      y2="50.085%"
    >
      <stop offset="0" stop-color="#0080ff" />
      <stop offset="1" stop-color="#00b9ff" />
    </linearGradient>
    <linearGradient
      id={`f_${id}`}
      x1="-.243%"
      x2="100.411%"
      y1="49.366%"
      y2="50.467%"
    >
      <stop offset="0" stop-color="#0080ff" />
      <stop offset=".17" stop-color="#008bff" />
      <stop offset=".47" stop-color="#00a7ff" />
      <stop offset=".63" stop-color="#00b9ff" />
      <stop offset="1" stop-color="#00b9ff" />
    </linearGradient>
    <linearGradient
      id={`g_${id}`}
      x1="-.125%"
      x2="100.225%"
      y1="49.627%"
      y2="50.101%"
    >
      <stop offset="0" stop-color="#00b9ff" />
      <stop offset=".3" stop-color="#0080ff" />
      <stop offset=".6" stop-color="#2d67f1" />
      <stop offset=".86" stop-color="#4d55e8" />
      <stop offset="1" stop-color="#594ee4" />
    </linearGradient>
    <linearGradient
      id={`h_${id}`}
      x1="4.557%"
      x2="99.354%"
      xlink:href={`#a_${id}`}
      y1="50.184%"
      y2="51.298%"
    />
    <path
      d="m175.05 236.86 25.163-15.072 49.298-86.93-76.287 89.098z"
      fill={`url(#b_${id})`}
    />
    <path
      d="m242.337 80.408-4.926-9.4-1.932-3.663-.2.196-25.818-47.015c-6.477-11.876-18.83-19.295-32.451-19.452l-25.074.206 36.214 113.52-23.958 23.331 8.924 86.245 73.769-84.021c10.005-11.587 11.97-28.09 4.92-41.646l-9.466-18.302z"
      fill={`url(#c_${id})`}
    />
    <path
      d="m201.113 72.256-43.18-70.907-74.523-1.346c-13.245-.153-25.58 6.57-32.53 17.867l-43.87 83.877 34.443-33.334 43.248-60.057 97.894 112.153 18.3-18.626c8.397-8.142 5.54-19.558.22-29.625z"
      fill={`url(#d_${id})`}
    />
    <path
      d="m97.784 95.26-13.262-86.464-73.148 88.03c-12.328 11.935-14.897 30.662-6.419 45.49l42.98 74.727c6.553 11.464 18.755 18.577 32.024 18.729l42.945.49-51.444-116.655z"
      fill={`url(#e_${id})`}
    />
    <path
      d="m173.227 223.9-101.847-104.878-13.196 12.59c-10.812 10.248-11.106 27.332-.728 37.921l43.99 66.384 70.65.907 1.127-12.926z"
      fill={`url(#f_${id})`}
    />
    <path
      d="m101.584 235.903 72.292-11.6 47.704 49.465z"
      fill={`url(#g_${id})`}
    />
    <path
      d="m173.111 224.483 27.168-3.457 24.096 49.915c1.06 2.06-1.719 3.977-3.373 2.302z"
      fill={`url(#h_${id})`}
    />
    <path
      d="m182.708 120.058-98.028-111.458 12.502 85.958-26.022 24.222 101.772 105.372-7.595-85.905 17.37-18.192z"
      fill="#fff"
    />
  </svg>
);
