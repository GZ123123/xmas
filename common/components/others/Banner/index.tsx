import { useEffect } from "react";

interface IBanner {
	className: string;
}

const Banner = ({ className }: IBanner) => {
	useEffect(() => {
		document
			.querySelectorAll("svg .star")
			.forEach((node: any) =>
				node.style.setProperty("--duration", `${4.3 + Math.random() * 2}s`)
			);
	}, []);

	return (
		<svg
			width="100%"
			height="100%"
			viewBox="0 0 1276 500"
			fill="#fff"
			className={`banner ${className}`}
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				className="star"
				d="M790.08 403.08L793.18 407.38L794.71 402.3L799.76 400.68L795.41 397.65L795.43 392.35L791.2 395.56L786.17 393.9L787.91 398.91L784.78 403.19L790.08 403.08Z"
				fill="currentColor"
			/>
			<path
				className="star"
				d="M471.17 405.29L475.62 409.46L476.22 403.39L481.56 400.44L475.98 398L474.83 392.01L470.78 396.57L464.73 395.81L467.81 401.07L465.22 406.59L471.17 405.29Z"
				fill="currentColor"
			/>
			<path
				className="star"
				d="M753.96 294.04L757.87 297.16L757.96 292.15L762.13 289.39L757.41 287.76L756.07 282.94L753.06 286.94L748.07 286.72L750.93 290.82L749.18 295.5L753.96 294.04Z"
				fill="currentColor"
			/>
			<path
				className="star"
				d="M508.69 294.33L512.06 296.83L511.99 292.63L515.411 290.19L511.401 288.96L510.13 284.95L507.721 288.39L503.521 288.35L506.05 291.71L504.711 295.7L508.69 294.33Z"
				fill="currentColor"
			/>
			<path
				className="star"
				d="M628.4 35.16L642.18 42.38L639.52 27.04L650.64 16.15L635.24 13.94L628.34 0L621.48 13.97L606.09 16.24L617.25 27.08L614.65 42.43L628.4 35.16Z"
				fill="currentColor"
			/>
			<path
				className="star"
				d="M1249.13 416.87L1252.91 419.13L1252.41 414.75L1255.72 411.86L1251.41 410.99L1249.68 406.94L1247.51 410.77L1243.13 411.17L1246.11 414.41L1245.13 418.71L1249.13 416.87Z"
				fill="currentColor"
			/>
			<path
				className="star"
				d="M1271.17 421.04L1273.65 422.66L1273.42 419.71L1275.73 417.84L1272.85 417.15L1271.79 414.38L1270.24 416.9L1267.28 417.05L1269.2 419.31L1268.43 422.17L1271.17 421.04Z"
				fill="currentColor"
			/>
			<path
				className="star"
				d="M126.98 379.5L128.55 381.65L129.3 379.1L131.84 378.27L129.64 376.76V374.1L127.53 375.72L125 374.9L125.89 377.41L124.32 379.57L126.98 379.5Z"
				fill="currentColor"
			/>
			<path
				className="star"
				d="M318.06 467.4L322.42 467.26L319.66 463.88L320.87 459.68L316.8 461.26L313.19 458.81L313.44 463.17L309.99 465.85L314.22 466.96L315.7 471.07L318.06 467.4Z"
				fill="currentColor"
			/>
			<path
				className="star"
				d="M1043.17 405.85L1043.29 410.74L1047.09 407.66L1051.78 409.05L1050.03 404.49L1052.8 400.46L1047.92 400.72L1044.95 396.84L1043.68 401.56L1039.07 403.19L1043.17 405.85Z"
				fill="currentColor"
			/>
			<path
				className="star"
				d="M920.64 415.19L922.72 418.06L923.73 414.66L927.11 413.57L924.19 411.55L924.2 408L921.38 410.16L918 409.06L919.18 412.41L917.09 415.28L920.64 415.19Z"
				fill="currentColor"
			/>
			<path
				className="star"
				d="M988.39 473.67L994.25 475.07L991.79 469.57L994.92 464.42L988.94 465.06L985.02 460.49L983.77 466.38L978.21 468.7L983.44 471.7L983.92 477.71L988.39 473.67Z"
				fill="currentColor"
			/>
			<path
				className="star"
				d="M924.49 212.41L929.84 211.65L925.97 207.87L926.9 202.54L922.11 205.05L917.33 202.52L918.24 207.85L914.37 211.61L919.71 212.4L922.09 217.25L924.49 212.41Z"
				fill="currentColor"
			/>
			<path
				className="star"
				d="M275.21 476.14L279.98 479.85L279.92 473.99L284.81 470.82L279.11 468.84L277.36 463.17L273.9 467.8L267.93 467.47L271.49 472.32L269.55 477.78L275.21 476.14Z"
				fill="currentColor"
			/>
			<path
				className="star"
				d="M334.02 417.17L336.15 419.53L336.82 416.48L339.82 415.27L336.99 413.72L336.72 410.62L334.31 412.72L331.13 412L332.47 414.85L330.78 417.51L334.02 417.17Z"
				fill="currentColor"
			/>
			<path
				className="star"
				d="M953.7 465.09L957.67 466L955.98 462.29L958.08 458.79L954.02 459.25L951.35 456.17L950.53 460.17L946.78 461.77L950.33 463.78L950.69 467.84L953.7 465.09Z"
				fill="currentColor"
			/>
			<path
				className="star"
				d="M631.89 497.46L636.06 499.03L634.77 494.76L637.55 491.28L633.1 491.19L630.65 487.46L629.19 491.67L624.89 492.85L628.44 495.55L628.23 500L631.89 497.46Z"
				fill="currentColor"
			/>
			<path
				className="star"
				d="M735.09 171.71L739.96 177.11L741.48 170.12L748.36 167.35L741.88 163.81L741.25 156.7L735.73 161.51L728.47 159.88L731.53 166.38L727.67 172.49L735.09 171.71Z"
				fill="currentColor"
			/>
			<path
				className="star"
				d="M131.52 492.38L136.37 493L133.91 488.77L135.99 484.34L131.21 485.38L127.64 482.02L127.15 486.89L122.86 489.25L127.34 491.22L128.26 496.03L131.52 492.38Z"
				fill="currentColor"
			/>
			<path
				className="star"
				d="M354.19 293.74L357.05 296.32L357.35 292.48L360.69 290.55L357.13 289.07L356.33 285.3L353.83 288.24L350 287.84L352.01 291.12L350.44 294.64L354.19 293.74Z"
				fill="currentColor"
			/>
			<path
				className="star"
				d="M111.64 387.03L115.1 388.39L114.08 384.82L116.44 381.95L112.73 381.82L110.73 378.68L109.46 382.17L105.86 383.11L108.79 385.4L108.56 389.11L111.64 387.03Z"
				fill="currentColor"
			/>
			<path
				className="star"
				d="M251.82 110.94L262.32 116.33L260.2 104.71L268.57 96.37L256.87 94.8L251.53 84.26L246.42 94.91L234.76 96.73L243.3 104.89L241.43 116.55L251.82 110.94Z"
				fill="currentColor"
			/>
			<path
				className="star"
				d="M1003.65 109.28L1014.11 114.75L1012.09 103.11L1020.52 94.8501L1008.84 93.1701L1003.59 82.5901L998.39 93.1901L986.71 94.9201L995.18 103.15L993.21 114.79L1003.65 109.28Z"
				fill="currentColor"
			/>
			<path
				className="star"
				d="M656.84 467.49L664.81 474.32L665.38 463.84L674.33 458.37L664.55 454.59L662.12 444.38L655.5 452.52L645.05 451.68L650.74 460.5L646.71 470.19L656.84 467.49Z"
				fill="currentColor"
			/>
			<path
				className="star"
				d="M597.85 476.92L604.55 478.35L601.61 472.15L605.04 466.22L598.24 467.11L593.66 462.01L592.4 468.75L586.14 471.53L592.16 474.81L592.87 481.63L597.85 476.92Z"
				fill="currentColor"
			/>
			<path
				className="star"
				d="M1157.77 383.07L1159.88 385.41L1160.54 382.38L1163.52 381.17L1160.71 379.64L1160.44 376.55L1158.05 378.64L1154.89 377.93L1156.22 380.75L1154.55 383.4L1157.77 383.07Z"
				fill="currentColor"
			/>
			<path
				className="star"
				d="M207.19 410.07L211.97 414.33L212.44 407.94L217.97 404.7L212.04 402.28L210.68 396.02L206.54 400.91L200.17 400.28L203.54 405.72L200.97 411.59L207.19 410.07Z"
				fill="currentColor"
			/>
			<path
				className="star"
				d="M314.51 340.16L318.68 341.03L316.84 337.19L318.95 333.5L314.73 334.06L311.87 330.91L311.11 335.1L307.23 336.85L310.97 338.87L311.44 343.1L314.51 340.16Z"
				fill="currentColor"
			/>
			<path
				className="star"
				d="M933.96 189.51L935.83 191.58L936.42 188.9L939.06 187.83L936.57 186.48L936.33 183.75L934.21 185.59L931.42 184.97L932.6 187.46L931.12 189.81L933.96 189.51Z"
				fill="currentColor"
			/>
			<path
				className="star"
				d="M138.9 294.61L144.45 294.51L140.99 290.17L142.6 284.85L137.41 286.8L132.85 283.62L133.1 289.17L128.68 292.52L134.03 294L135.84 299.24L138.9 294.61Z"
				fill="currentColor"
			/>
			<path
				className="star"
				d="M316.97 186.09L320.27 189.74L321.3 185.01L325.96 183.13L321.57 180.74L321.15 175.92L317.4 179.17L312.48 178.07L314.56 182.48L311.94 186.62L316.97 186.09Z"
				fill="currentColor"
			/>
			<path
				className="star"
				d="M104.63 487.08L106.69 489.42L107.29 486.35L110.16 485.11L107.43 483.59L107.13 480.48L104.85 482.61L101.8 481.93L103.11 484.77L101.53 487.46L104.63 487.08Z"
				fill="currentColor"
			/>
			<path
				className="star"
				d="M1155.9 489.07L1162.23 487.39L1157.26 483.3L1157.89 476.66L1152.39 480.38L1146.45 477.95L1148.01 484.34L1143.71 489.48L1150.18 489.71L1153.47 495.32L1155.9 489.07Z"
				fill="currentColor"
			/>
			<path
				className="star"
				d="M1127.55 480.62L1129.95 477.19L1125.84 477.24L1123.41 473.74L1122.26 477.82L1118.35 479.08L1121.75 481.56L1121.77 485.84L1125.02 483.29L1128.94 484.67L1127.55 480.62Z"
				fill="currentColor"
			/>
			<path
				className="star"
				d="M119.67 280.13L121.1 282.17L121.9 279.86L124.35 279.22L122.3 277.75L122.39 275.32L120.32 276.71L117.93 275.85L118.7 278.18L117.13 280.09L119.67 280.13Z"
				fill="currentColor"
			/>
			<path
				className="star"
				d="M487.5 282.11L490.71 282.26L488.88 279.63L490.01 276.63L486.94 277.55L484.44 275.54L484.37 278.75L481.69 280.51L484.72 281.57L485.56 284.66L487.5 282.11Z"
				fill="currentColor"
			/>
			<path
				className="star"
				d="M372.021 277.82L372.971 279.79L374.011 277.9L376.231 277.68L374.661 276.11L375.081 274L373.081 274.92L371.111 273.83L371.451 275.97L369.811 277.41L372.021 277.82Z"
				fill="currentColor"
			/>
			<path
				className="star"
				d="M719.981 139.45L723.12 138.83L720.82 136.68L721.32 133.46L718.531 135.11L715.701 133.75L716.271 136.91L714.021 139.29L717.171 139.6L718.611 142.43L719.981 139.45Z"
				fill="currentColor"
			/>
			<path
				className="star"
				d="M522.471 187.17L527.271 187.29L524.621 183.39L526.431 178.84L521.791 180.33L518.111 177.39L517.891 182.22L513.811 184.95L518.311 186.44L519.471 191.07L522.471 187.17Z"
				fill="currentColor"
			/>
			<path
				className="star"
				d="M1087.88 224.09L1091.46 223.37L1088.84 220.92L1089.41 217.25L1086.22 219.14L1083 217.58L1083.65 221.19L1081.09 223.9L1084.68 224.25L1086.31 227.48L1087.88 224.09Z"
				fill="currentColor"
			/>
			<path
				className="star"
				d="M1177.23 360.25L1181.46 360.13L1178.94 356.83L1180.3 352.74L1176.29 354.27L1172.91 351.87L1172.96 356.13L1169.5 358.73L1173.54 359.82L1174.78 363.83L1177.23 360.25Z"
				fill="currentColor"
			/>
			<path
				className="star"
				d="M821.92 410.25L825.21 410.12L823.1 407.58L824 404.4L820.93 405.62L818.19 403.79L818.41 407.08L815.82 409.12L819.01 409.94L820.15 413.03L821.92 410.25Z"
				fill="currentColor"
			/>
			<path
				className="star"
				d="M668.12 331.77L670.76 332.77L669.95 330.07L671.71 327.86L668.89 327.8L667.34 325.44L666.42 328.11L663.7 328.85L665.94 330.56L665.81 333.38L668.12 331.77Z"
				fill="currentColor"
			/>
			<path
				className="star"
				d="M701.521 353.53L706.561 357.85L706.931 351.22L712.591 347.76L706.401 345.37L704.861 338.9L700.671 344.06L694.061 343.53L697.661 349.11L695.111 355.24L701.521 353.53Z"
				fill="currentColor"
			/>
			<path
				className="star"
				d="M546.8 355.1L551.04 356.01L549.17 352.09L551.34 348.33L547.04 348.89L544.14 345.66L543.35 349.93L539.39 351.69L543.2 353.77L543.65 358.08L546.8 355.1Z"
				fill="currentColor"
			/>
			<path
				className="star"
				d="M946.13 339.44L949.69 340.79L948.59 337.14L950.97 334.16L947.16 334.08L945.07 330.9L943.82 334.5L940.15 335.5L943.18 337.81L943 341.61L946.13 339.44Z"
				fill="currentColor"
			/>
			<path
				className="star"
				d="M963.43 324.84L965.59 326.64L965.71 323.82L968.09 322.32L965.45 321.34L964.76 318.61L963.01 320.82L960.2 320.63L961.76 322.98L960.71 325.6L963.43 324.84Z"
				fill="currentColor"
			/>
			<path
				className="star"
				d="M187.63 339.68L189.28 341.5L189.79 339.14L192.11 338.21L189.92 337.01L189.71 334.61L187.85 336.23L185.39 335.68L186.43 337.88L185.12 339.94L187.63 339.68Z"
				fill="currentColor"
			/>
			<path
				className="star"
				d="M1123.3 130.78L1126.17 132.91L1126.11 129.33L1129.02 127.25L1125.61 126.2L1124.53 122.79L1122.48 125.72L1118.9 125.69L1121.05 128.55L1119.92 131.94L1123.3 130.78Z"
				fill="currentColor"
			/>
			<path
				className="star"
				d="M1107.86 103.15L1110.58 103.28L1109.03 101.04L1109.99 98.4901L1107.38 99.2701L1105.25 97.5601L1105.19 100.29L1102.91 101.79L1105.49 102.69L1106.21 105.32L1107.86 103.15Z"
				fill="currentColor"
			/>
			<path
				className="star"
				d="M140.29 140.34L136.93 142.85L140.97 144L142.32 147.98L144.66 144.49L148.86 144.44L146.26 141.14L147.51 137.13L143.57 138.57L140.14 136.14L140.29 140.34Z"
				fill="currentColor"
			/>
			<path
				className="star"
				d="M158.12 106.52L157.04 109.54L160.1 108.55L162.64 110.51L162.65 107.3L165.29 105.49L162.24 104.5L161.34 101.42L159.45 104.01L156.24 103.92L158.12 106.52Z"
				fill="currentColor"
			/>
			<path
				className="star"
				d="M518.6 91.64L519.71 95.7L522.25 92.35L526.45 92.55L524.06 89.1L525.54 85.17L521.52 86.38L518.24 83.75L518.15 87.95L514.63 90.26L518.6 91.64Z"
				fill="currentColor"
			/>
			<path
				className="star"
				d="M538.49 52.8L540.91 54.9L541.11 51.7L543.85 50.05L540.87 48.87L540.15 45.75L538.11 48.22L534.92 47.94L536.64 50.65L535.39 53.6L538.49 52.8Z"
				fill="currentColor"
			/>
			<path
				className="star"
				d="M491.83 71.9999L494.31 71.5999L492.48 69.8699L492.87 67.3799L490.66 68.5799L488.41 67.4499L488.87 69.9199L487.1 71.6999L489.6 72.0299L490.75 74.2699L491.83 71.9999Z"
				fill="currentColor"
			/>
			<path
				className="star"
				d="M750.74 60.4701L747.021 62.4101L750.831 64.1801L751.541 68.33L754.401 65.2501L758.55 65.8701L756.51 62.1901L758.38 58.4301L754.25 59.2401L751.25 56.3L750.74 60.4701Z"
				fill="currentColor"
			/>
			<path
				className="star"
				d="M798.11 78.1599L796.57 80.9799L799.74 80.4799L801.94 82.8099L802.45 79.6499L805.35 78.2799L802.5 76.8099L802.09 73.6299L799.81 75.8899L796.66 75.2999L798.11 78.1599Z"
				fill="currentColor"
			/>
			<path
				className="star"
				d="M782.54 37.3399L783.46 39.6799L784.76 37.5199L787.27 37.3699L785.62 35.4699L786.25 33.0299L783.93 34.0099L781.81 32.6599L782.03 35.1699L780.08 36.7699L782.54 37.3399Z"
				fill="currentColor"
			/>
			<path
				className="star"
				d="M1091.94 143.69L1092.86 146.03L1094.16 143.87L1096.67 143.72L1095.02 141.82L1095.65 139.38L1093.33 140.36L1091.21 139.01L1091.43 141.52L1089.48 143.12L1091.94 143.69Z"
				fill="currentColor"
			/>
			<path
				className="star"
				d="M335.77 70.37L338.25 69.97L336.42 68.24L336.81 65.75L334.6 66.95L332.35 65.82L332.82 68.29L331.04 70.07L333.54 70.4L334.69 72.64L335.77 70.37Z"
				fill="currentColor"
			/>
			<path
				className="star"
				d="M936.2 132.87L934.67 135.69L937.83 135.19L940.04 137.52L940.55 134.36L943.45 132.99L940.59 131.52L940.18 128.35L937.91 130.6L934.75 130.01L936.2 132.87Z"
				fill="currentColor"
			/>
			<path
				className="star"
				d="M139.21 421.83L140.25 423.31L140.84 421.63L142.62 421.16L141.13 420.09L141.19 418.31L139.68 419.33L137.94 418.71L138.5 420.4L137.36 421.79L139.21 421.83Z"
				fill="currentColor"
			/>
			<path
				className="star"
				d="M1105.11 419.83L1106.83 421.26L1106.92 419.02L1108.83 417.82L1106.72 417.04L1106.17 414.86L1104.77 416.62L1102.53 416.47L1103.78 418.35L1102.94 420.43L1105.11 419.83Z"
				fill="currentColor"
			/>
			<path
				className="star"
				d="M111.48 123.42L113.96 123.02L112.13 121.29L112.52 118.8L110.31 120L108.06 118.87L108.53 121.34L106.75 123.12L109.25 123.45L110.4 125.69L111.48 123.42Z"
				fill="currentColor"
			/>
			<path
				className="a"
				d="M1252.08 425.84C1248.15 427.31 1242.33 429.34 1234.87 431.68C1231.14 432.84 1226.97 434.03 1222.43 435.26C1217.89 436.49 1212.96 437.75 1207.65 438.94C1202.34 440.13 1196.65 441.3 1190.65 442.46C1187.65 443.06 1184.58 443.59 1181.44 444.17C1178.3 444.75 1175.08 445.26 1171.74 445.77C1158.54 447.88 1144.21 449.77 1128.99 450.84C1121.39 451.39 1113.56 451.75 1105.56 451.84C1097.56 451.93 1089.4 451.93 1081.05 451.67C1072.7 451.41 1064.27 451.01 1055.74 450.32C1047.21 449.63 1038.6 448.73 1029.92 447.63C1021.24 446.53 1012.51 445.17 1003.76 443.76C995.01 442.35 986.16 440.76 977.29 439.29C968.42 437.82 959.52 436.47 950.63 435.21C941.74 433.95 932.87 432.85 924.05 431.85C906.4 429.85 888.94 428.62 872.05 428.08C869.93 428.01 867.81 427.98 865.7 427.93C863.59 427.88 861.49 427.83 859.44 427.83H853.28L847.08 427.89C838.9 428.05 830.91 428.42 823.16 429.03C815.41 429.64 807.89 430.42 800.64 431.39C798.58 431.67 796.547 431.96 794.54 432.26L788.93 429.79C776.73 424.43 764.84 419.69 752.93 413.72C747.1 410.79 740.73 407.72 735.21 404.26C731.26 401.78 726.67 398.82 727.35 393.37C728.35 385.01 741.61 384.62 747.71 383.59C759.5 381.59 771.34 378.94 781.9 373.31C789.63 369.18 797.46 361.78 795.32 352.2C793.18 342.62 782.72 336.43 774.94 331.7C766.914 326.82 758.561 322.5 749.94 318.77C735.01 312.28 721.34 303.77 707.61 295.35C702 291.89 694.44 288.35 694.17 280.92C693.86 272.49 706.17 268.2 712.73 266.72C725.73 263.79 766.84 255.07 747.57 236.55C738.38 227.72 728.57 220.47 720.44 210.49C712.326 200.242 704.893 189.472 698.19 178.25C684.402 155.613 672.222 132.035 661.74 107.69C655.8 93.98 648.66 63.7999 629.05 64.1099C609.43 63.7899 602.33 94 596.33 107.68C585.848 132.025 573.668 155.603 559.88 178.24C553.18 189.464 545.747 200.234 537.63 210.48C529.53 220.48 519.7 227.71 510.51 236.54C491.26 255.06 532.33 263.78 545.33 266.71C551.89 268.19 564.2 272.48 563.9 280.91C563.63 288.34 556.06 291.91 550.46 295.34C536.72 303.8 523.05 312.27 508.12 318.76C499.501 322.494 491.148 326.814 483.12 331.69C475.34 336.42 464.92 342.47 462.75 352.19C460.58 361.91 468.44 369.19 476.16 373.3C486.72 378.93 498.56 381.57 510.35 383.58C516.45 384.58 529.68 385 530.72 393.36C531.4 398.81 526.8 401.77 522.86 404.25C517.34 407.7 510.97 410.78 505.13 413.71C493.23 419.71 481.33 424.42 469.13 429.78L463.52 432.25C461.52 431.95 459.47 431.66 457.41 431.38C450.17 430.407 442.663 429.62 434.89 429.02C427.14 428.41 419.15 428.02 410.97 427.88L404.78 427.82H398.61C396.61 427.82 394.46 427.82 392.35 427.92C390.24 428.02 388.13 428 386.01 428.07C369.08 428.61 351.62 429.88 334.01 431.84C325.19 432.84 316.31 433.93 307.43 435.2C298.55 436.47 289.65 437.84 280.78 439.28C271.91 440.72 263.02 442.4 254.33 443.8C245.64 445.2 236.84 446.56 228.16 447.67C219.48 448.78 210.87 449.67 202.34 450.36C193.81 451.05 185.34 451.45 177.04 451.71C168.74 451.97 160.54 452.04 152.53 451.88C144.52 451.72 136.7 451.39 129.09 450.88C113.87 449.81 99.54 447.88 86.34 445.81C83 445.3 79.8 444.74 76.65 444.21C73.5 443.68 70.42 443.1 67.43 442.5C61.43 441.34 55.78 440.19 50.43 438.98C45.08 437.77 40.2 436.51 35.66 435.3C31.12 434.09 26.95 432.88 23.22 431.72C15.76 429.38 9.94 427.35 6 425.88L0 423.6L1.47 424.35C2.47 424.84 3.86 425.6 5.76 426.5C9.55 428.35 15.15 430.98 22.47 433.92C26.12 435.4 30.2 436.92 34.68 438.56C39.16 440.2 44.05 441.73 49.32 443.3C59.84 446.5 71.88 449.53 85.11 452.3C99.382 455.378 113.81 457.685 128.33 459.21C136.07 460.01 144.05 460.64 152.22 461.01C160.39 461.38 168.76 461.5 177.22 461.43C194.672 461.265 212.102 460.14 229.43 458.06C238.27 457 247.133 455.763 256.02 454.35C264.92 452.95 273.71 451.35 282.53 449.97C291.35 448.59 300.17 447.11 308.96 445.83C317.75 444.55 326.52 443.35 335.22 442.28C339.58 441.78 343.91 441.28 348.22 440.82C352.53 440.36 356.84 439.95 361.11 439.53C369.66 438.77 378.11 438.17 386.45 437.68C388.53 437.56 390.59 437.48 392.65 437.38C394.71 437.28 396.75 437.18 398.83 437.12L404.98 436.92L410.98 436.79C418.98 436.68 426.82 436.79 434.45 437.13C440.27 437.36 445.92 437.73 451.45 438.13C438.92 445.05 426.45 454.58 429.45 468.46C431.57 478.38 439.26 484.27 448.08 488.02C467.61 496.66 494.89 499.02 516.01 497.02C533.59 495.41 556.71 489.88 561.32 474.67C561.708 472.913 561.717 471.094 561.347 469.333C560.976 467.572 560.234 465.911 559.17 464.46H559.12C558.11 462.976 556.91 461.631 555.55 460.46C552.38 457.46 548.49 454.96 541.92 451.75C534.33 448 509.33 439.07 481.33 435.8C495.45 430.23 536.68 417.45 543.9 402.8C551.38 387.64 538.9 375.59 524.56 371.63C513.38 368.56 500.7 368.63 490.2 363.8C481.63 359.8 481.33 352.65 489.52 347.96C493.99 345.4 498.77 343.24 503.11 341.09C511.54 336.93 520.11 333.09 528.55 328.92C543.61 321.44 560.68 312.31 573.62 301.54C585.23 291.89 592.16 278.33 583.37 264.87C578.93 258.07 569.87 254.58 562.13 252.66C553.83 250.698 545.644 248.281 537.61 245.42C537.236 245.285 536.904 245.055 536.644 244.755C536.384 244.454 536.206 244.091 536.127 243.702C536.047 243.312 536.07 242.909 536.191 242.53C536.312 242.152 536.529 241.811 536.82 241.54C557.38 221.73 573.19 197.73 587.29 173.2C602.58 146.59 615.62 118.81 627.38 90.54V90.6099C627.38 90.5099 627.47 90.4199 627.51 90.3299C627.61 90.1 627.761 89.8958 627.951 89.733C628.142 89.5701 628.367 89.4528 628.61 89.39C628.74 89.3537 628.875 89.3368 629.01 89.34C629.148 89.3363 629.287 89.3531 629.42 89.39C629.662 89.4528 629.885 89.5702 630.074 89.7331C630.263 89.8961 630.412 90.1003 630.51 90.3299C630.559 90.4204 630.603 90.5139 630.64 90.6099V90.54C642.41 118.81 655.44 146.59 670.73 173.2C684.83 197.73 700.65 221.73 721.21 241.54C721.498 241.812 721.713 242.153 721.832 242.531C721.952 242.909 721.973 243.311 721.894 243.7C721.815 244.088 721.638 244.45 721.38 244.751C721.122 245.052 720.792 245.282 720.42 245.42C712.385 248.28 704.2 250.697 695.9 252.66C688.16 254.58 679.09 258.07 674.66 264.87C665.86 278.33 672.8 291.87 684.4 301.54C697.4 312.31 714.4 321.44 729.47 328.92C737.89 333.11 746.47 336.92 754.91 341.09C759.25 343.24 764.04 345.4 768.5 347.96C776.69 352.65 776.4 359.82 767.82 363.8C757.33 368.66 744.64 368.56 733.47 371.63C719.1 375.63 706.64 387.63 714.12 402.8C721.35 417.43 762.58 430.21 776.7 435.8C748.7 439.07 723.7 448.01 716.13 451.73C709.57 454.94 705.67 457.46 702.51 460.44C701.145 461.609 699.941 462.954 698.93 464.44C697.866 465.891 697.124 467.552 696.753 469.313C696.383 471.074 696.392 472.893 696.78 474.65C701.39 489.86 724.51 495.39 742.09 497C763.22 498.94 790.5 496.61 810.03 488C818.84 484.25 826.54 478.36 828.65 468.44C831.65 454.56 819.15 445.03 806.65 438.11C812.21 437.67 817.86 437.3 823.65 437.11C831.27 436.81 839.11 436.66 847.11 436.77L853.11 436.9L859.27 437.1C861.34 437.16 863.39 437.25 865.44 437.36C867.49 437.47 869.56 437.54 871.64 437.66C879.97 438.15 888.43 438.75 896.98 439.51C901.26 439.93 905.56 440.31 909.88 440.8C914.2 441.29 918.54 441.8 922.88 442.26C931.59 443.33 940.35 444.55 949.15 445.81C957.95 447.07 966.76 448.49 975.57 449.95C984.38 451.41 993.19 452.95 1002.09 454.33C1010.99 455.71 1019.83 456.98 1028.67 458.04C1046 460.12 1063.43 461.245 1080.88 461.41C1089.34 461.48 1097.72 461.34 1105.88 460.99C1114.04 460.64 1122.02 459.99 1129.76 459.19C1144.28 457.665 1158.71 455.358 1172.99 452.28C1186.21 449.47 1198.25 446.44 1208.77 443.28C1214.04 441.71 1218.92 440.08 1223.42 438.54C1227.92 437 1231.98 435.38 1235.63 433.9C1242.94 430.96 1248.54 428.33 1252.33 426.48C1254.23 425.58 1255.66 424.82 1256.63 424.33L1258.1 423.58L1252.08 425.84ZM512.78 447.72C527.21 451.24 540.78 456.72 545.18 460.63C545.49 460.88 545.73 461.13 546.01 461.38L547.63 462.96C555.29 471.3 549.97 479.22 542.63 483.03C524.16 492.68 501.29 491.55 481.01 488.49C470.38 486.89 459.16 484.68 450.1 478.67C446.02 475.96 441.58 472.16 440.67 467.16C439.59 461.16 444.35 457.71 448.15 453.93L449.22 453.01C456.625 447.902 464.57 443.623 472.91 440.25L477.28 440.81C490.56 442.63 495.9 443.61 512.78 447.72ZM808.78 453.03L809.86 453.95C813.65 457.73 818.42 461.19 817.33 467.18C816.43 472.18 811.98 475.98 807.9 478.69C798.85 484.69 787.62 486.91 777 488.51C756.72 491.57 733.85 492.7 715.37 483.05C708.08 479.24 702.76 471.32 710.37 462.98L711.98 461.4C712.26 461.15 712.51 460.9 712.81 460.65C717.21 456.79 730.81 451.26 745.2 447.74C762.09 443.63 767.43 442.65 780.66 440.85L785.03 440.29C793.4 443.64 801.374 447.903 808.81 453L808.78 453.03Z"
				fill="currentColor"
			/>
			<path
				className="b"
				d="M382.84 434.68C389.2 431.97 394.59 428.44 396.12 421.28C399.32 406.28 378.87 397.94 368.04 393.18C359.24 389.31 350.65 385.9 342.04 381.59C337.83 379.48 333.24 377.26 329.25 374.76C326.4 372.98 323.08 370.84 323.57 366.91C324.32 360.91 333.87 360.6 338.28 359.85C346.79 358.41 355.34 356.5 362.96 352.44C368.54 349.44 374.2 344.12 372.65 337.21C371.1 330.3 363.55 325.83 357.94 322.42C352.136 318.902 346.098 315.785 339.87 313.09C329.09 308.41 319.22 302.3 309.3 296.19C305.25 293.7 298.01 290.19 297.48 284.91C296.76 277.67 308.2 276.23 313 275.55C322.68 274.17 351.21 266.1 338.15 253.78C331.46 247.47 324.41 242.18 318.57 234.98C312.707 227.589 307.338 219.819 302.5 211.72C292.545 195.393 283.753 178.384 276.19 160.82C271.89 150.92 266.74 129.16 252.58 129.38C238.43 129.16 233.28 150.92 228.98 160.82C221.416 178.384 212.625 195.393 202.67 211.72C197.835 219.825 192.47 227.602 186.61 235C180.77 242.2 173.72 247.49 167.03 253.8C153.96 266.12 182.5 274.19 192.18 275.57C196.98 276.25 208.42 277.69 207.7 284.93C207.17 290.26 199.93 293.72 195.88 296.21C185.96 302.32 176.09 308.43 165.31 313.11C159.081 315.805 153.044 318.922 147.24 322.44C141.63 325.85 134.1 330.21 132.53 337.23C130.96 344.25 136.64 349.48 142.22 352.46C149.84 356.52 158.39 358.46 166.9 359.87C171.31 360.62 180.9 360.87 181.61 366.93C182.09 370.86 178.78 373 175.93 374.78C171.93 377.28 167.34 379.5 163.13 381.61C154.54 385.92 145.95 389.33 137.13 393.2C126.3 397.96 105.85 406.3 109.05 421.3C110.58 428.46 115.97 431.99 122.33 434.7C136.43 440.94 152.33 442.04 167.57 440.32C180.25 438.89 194.3 435.53 202.32 424.94C203.32 423.59 205.24 421.4 205.55 419.71C206.14 416.49 203.62 419.28 202.82 420.52C199.45 425.73 195.87 429.25 190.02 431.85C176.27 437.94 160.37 437.78 145.73 435.57C138.06 434.41 129.96 432.82 123.42 428.48C120.42 426.48 117.26 423.79 116.61 420.18C115.83 415.87 119.27 413.36 122.01 410.64L122.78 409.97C133.93 401.97 147.47 397.97 160.23 392.9C170.43 388.9 185.89 384.31 191.11 373.75C196.51 362.82 187.52 354.12 177.11 351.27C169.04 349.05 159.88 349.13 152.3 345.62C146.11 342.75 145.9 337.62 151.81 334.19C155.03 332.34 158.49 330.78 161.62 329.24C167.7 326.24 173.91 323.48 179.99 320.46C190.86 315.06 203.18 308.46 212.53 300.7C220.91 293.7 225.91 283.96 219.53 274.25C216.32 269.35 209.78 266.82 204.19 265.44C198.197 264.03 192.288 262.288 186.49 260.22C186.219 260.123 185.978 259.958 185.79 259.741C185.602 259.524 185.473 259.262 185.416 258.981C185.358 258.699 185.375 258.408 185.463 258.134C185.551 257.861 185.709 257.615 185.92 257.42C200.76 243.13 212.18 225.81 222.36 208.12C233.262 188.878 242.928 168.961 251.3 148.49L251.4 148.28C251.472 148.116 251.581 147.971 251.718 147.855C251.855 147.739 252.016 147.655 252.19 147.61C252.286 147.596 252.384 147.596 252.48 147.61C252.579 147.595 252.68 147.595 252.78 147.61C252.953 147.655 253.115 147.739 253.251 147.855C253.388 147.971 253.497 148.116 253.57 148.28L253.67 148.49C262.081 168.957 271.787 188.867 282.73 208.1C292.91 225.79 304.33 243.1 319.17 257.4C319.378 257.596 319.533 257.842 319.62 258.115C319.706 258.388 319.722 258.678 319.665 258.959C319.608 259.239 319.48 259.501 319.294 259.718C319.107 259.935 318.868 260.101 318.6 260.2C312.801 262.268 306.892 264.01 300.9 265.42C295.31 266.8 288.77 269.33 285.56 274.23C279.21 283.94 284.22 293.72 292.56 300.68C301.91 308.45 314.23 315.04 325.1 320.44C331.18 323.44 337.39 326.21 343.47 329.22C346.6 330.76 350.05 332.32 353.28 334.17C359.19 337.56 358.98 342.73 352.79 345.6C345.21 349.11 336.05 349.03 327.98 351.25C317.61 354.1 308.62 362.8 313.98 373.73C319.19 384.29 334.66 388.86 344.86 392.88C357.62 397.88 371.16 401.99 382.31 409.95L383.08 410.62C385.82 413.34 389.26 415.85 388.48 420.16C387.82 423.77 384.62 426.51 381.67 428.46C375.13 432.8 367.03 434.39 359.36 435.55L382.84 434.68Z"
				fill="currentColor"
			/>
			<path
				className="c"
				d="M872.82 434.68C866.46 431.97 861.07 428.44 859.54 421.28C856.34 406.28 876.79 397.94 887.62 393.18C896.42 389.31 905.01 385.9 913.62 381.59C917.83 379.48 922.43 377.26 926.41 374.76C929.26 372.98 932.58 370.84 932.09 366.91C931.34 360.91 921.79 360.6 917.38 359.85C908.87 358.41 900.32 356.5 892.7 352.44C887.12 349.44 881.46 344.12 883.01 337.21C884.56 330.3 892.11 325.83 897.72 322.42C903.526 318.9 909.567 315.783 915.8 313.09C926.58 308.41 936.44 302.3 946.36 296.19C950.36 293.7 957.65 290.19 958.18 284.91C958.9 277.67 947.46 276.23 942.66 275.55C932.98 274.17 904.45 266.1 917.51 253.78C924.2 247.47 931.25 242.18 937.09 234.98C942.953 227.589 948.321 219.819 953.16 211.72C963.115 195.393 971.907 178.384 979.47 160.82C983.77 150.92 988.92 129.16 1003.08 129.38C1017.23 129.16 1022.39 150.92 1026.68 160.82C1034.25 178.382 1043.04 195.39 1052.99 211.72C1057.82 219.825 1063.19 227.602 1069.05 235C1074.9 242.2 1081.94 247.49 1088.63 253.8C1101.7 266.12 1073.16 274.19 1063.48 275.57C1058.68 276.25 1047.24 277.69 1047.96 284.93C1048.49 290.26 1055.73 293.72 1059.78 296.21C1069.7 302.32 1079.57 308.43 1090.35 313.11C1096.58 315.803 1102.62 318.92 1108.42 322.44C1114.04 325.85 1121.56 330.21 1123.13 337.23C1124.7 344.25 1119.02 349.48 1113.44 352.46C1105.82 356.52 1097.27 358.46 1088.76 359.87C1084.36 360.62 1074.76 360.87 1074.05 366.93C1073.57 370.86 1076.88 373 1079.73 374.78C1083.73 377.28 1088.32 379.5 1092.53 381.61C1101.12 385.92 1109.71 389.33 1118.53 393.2C1129.36 397.96 1149.81 406.3 1146.61 421.3C1145.08 428.46 1139.69 431.99 1133.33 434.7C1119.23 440.94 1103.33 442.04 1088.09 440.32C1075.41 438.89 1061.36 435.53 1053.34 424.94C1052.34 423.59 1050.42 421.4 1050.11 419.71C1049.52 416.49 1052.04 419.28 1052.84 420.52C1056.21 425.73 1059.84 429.25 1065.64 431.85C1079.39 437.94 1095.29 437.78 1109.93 435.57C1117.6 434.41 1125.7 432.82 1132.24 428.48C1135.19 426.48 1138.4 423.79 1139.05 420.18C1139.83 415.87 1136.39 413.36 1133.65 410.64L1132.88 409.97C1121.73 401.97 1108.19 397.97 1095.43 392.9C1085.23 388.9 1069.77 384.31 1064.55 373.75C1059.15 362.82 1068.14 354.12 1078.55 351.27C1086.61 349.05 1095.77 349.13 1103.35 345.62C1109.54 342.75 1109.76 337.62 1103.84 334.19C1100.62 332.34 1097.16 330.78 1094.03 329.24C1087.95 326.24 1081.74 323.48 1075.66 320.46C1064.79 315.06 1052.47 308.46 1043.12 300.7C1034.74 293.7 1029.74 283.96 1036.12 274.25C1039.32 269.35 1045.86 266.82 1051.45 265.44C1057.45 264.029 1063.36 262.286 1069.16 260.22C1069.43 260.121 1069.67 259.955 1069.85 259.738C1070.04 259.521 1070.17 259.259 1070.23 258.979C1070.28 258.698 1070.27 258.408 1070.18 258.135C1070.09 257.862 1069.94 257.616 1069.73 257.42C1054.88 243.13 1043.46 225.81 1033.28 208.12C1022.38 188.878 1012.71 168.961 1004.34 148.49C1004.31 148.418 1004.28 148.348 1004.24 148.28C1004.17 148.116 1004.06 147.971 1003.92 147.855C1003.78 147.739 1003.62 147.655 1003.45 147.61C1003.35 147.596 1003.26 147.596 1003.16 147.61C1003.06 147.595 1002.96 147.595 1002.86 147.61C1002.69 147.655 1002.52 147.739 1002.39 147.855C1002.25 147.971 1002.14 148.116 1002.07 148.28C1002.04 148.352 1002.01 148.422 1001.97 148.49C993.599 168.961 983.932 188.878 973.03 208.12C962.85 225.81 951.43 243.12 936.59 257.42C936.381 257.616 936.227 257.862 936.14 258.135C936.053 258.408 936.038 258.698 936.095 258.979C936.152 259.259 936.28 259.521 936.466 259.738C936.653 259.955 936.891 260.121 937.16 260.22C942.959 262.286 948.868 264.029 954.86 265.44C960.45 266.82 966.99 269.35 970.2 274.25C976.55 283.96 971.54 293.74 963.2 300.7C953.85 308.47 941.53 315.06 930.66 320.46C924.58 323.46 918.38 326.23 912.29 329.24C909.16 330.78 905.71 332.34 902.48 334.19C896.57 337.58 896.78 342.75 902.97 345.62C910.55 349.13 919.71 349.05 927.78 351.27C938.15 354.12 947.15 362.82 941.78 373.75C936.57 384.31 921.1 388.88 910.9 392.9C898.14 397.9 884.6 402.01 873.46 409.97L872.68 410.64C869.94 413.36 866.5 415.87 867.28 420.18C867.94 423.79 871.14 426.53 874.09 428.48C880.63 432.82 888.73 434.41 896.4 435.57L872.82 434.68Z"
				fill="currentColor"
			/>
		</svg>
	);
};

export default Banner;