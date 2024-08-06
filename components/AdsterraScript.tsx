// components/AdsterraScript.tsx
import Script from 'next/script';

const AdsterraScript = () => (
  <>
    <Script
      id="adsterra-script"
      src="//pl23959426.highratecpm.com/6b/01/b8/6b01b8707d5332bc63b07962c02ba5cc.js"
      strategy="afterInteractive" // or "afterInteractive" if you need it to load earlier
    />
  </>
);

export default AdsterraScript;

//<script type='text/javascript' src='//pl23959426.highratecpm.com/6b/01/b8/6b01b8707d5332bc63b07962c02ba5cc.js'></script>
