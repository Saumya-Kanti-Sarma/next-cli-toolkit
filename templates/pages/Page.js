export const Page_Template = (route, css = true, interFace = false) => {
  if (css == false && interFace == false) {
    return (
      `"use client";

const Page = () => {
  return (
    <>
    This is ${route}
    </>
  );
};
export default Page;`
    )
  }
  else if (css == true && interFace == false) {
    return (
      `"use client";
import "./page.css";

const Page = () => {
  return (
    <>
    This is ${route}
    </>
  );
};
export default Page;`
    )
  }
  else if (css == true && interFace == true) {
    return (
      `"use client";
import "./page.css";
interface pageInterface {

}
const Page: React.FC<pageInterface> = ({ }) => {
  return (
    <>
    This is ${route}
    </>
  );
};
export default Page;`
    )
  }
  else if (css == false && interFace == true) {
    return (
      `"use client";
interface pageInterface {

}
const Page: React.FC<pageInterface> = ({ }) => {
  return (
    <>
    This is ${route}
    </>
  );
};
export default Page;`
    )
  };
};