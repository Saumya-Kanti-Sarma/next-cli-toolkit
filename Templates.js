const Templates = {
  plainTSX: `"use client";
import "./page.css"
const Page = () => {
  return (
    <>
    </>
  );
};
export default Page;`,

  plainNoCss: `"use client";
const Page = () => {
  return (
    <>
    </>
  );
};
export default Page;`,


  interfaceTSX: `"use client";
import "./page.css"
interface pageInterface {

}
const Page: React.FC<pageInterface> = ({ }) => {
  return (
    <>
    </>
  );
};
export default Page;
`,

  interfaceNoCSS: `"use client";
interface pageInterface {

}
const Page: React.FC<pageInterface> = ({ }) => {
  return (
    <>
    </>
  );
};
export default Page;`,

}

export default Templates