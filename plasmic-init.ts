import { initPlasmicLoader } from "@plasmicapp/loader-nextjs";

import { ScrollProvider } from "./components/ScrollContext";

export const PLASMIC = initPlasmicLoader({
  projects: [
    {
      id: "sitNcBekbsJ8STSykn1zZA",
      token: "R4QgK039L3wPw9zWJ23fVM5LgmavTrmd44Warh6c4cnRtd1HgsTN1iC7pObqWx54b4kvX3r6rVlB42ZM5w",
    },
  ],

  // By default Plasmic will use the last published version of your project.
  // For development, you can set preview to true, which will use the unpublished
  // project, allowing you to see your designs without publishing.  Please
  // only use this for development, as this is significantly slower.
  preview: false,
});

// You can register any code components that you want to use here; see
// https://docs.plasmic.app/learn/code-components-ref/
// And configure your Plasmic project to use the host url pointing at
// the /plasmic-host page of your nextjs app (for example,
// http://localhost:3000/plasmic-host).  See
// https://docs.plasmic.app/learn/app-hosting/#set-a-plasmic-project-to-use-your-app-host

// PLASMIC.registerComponent(...);


PLASMIC.registerGlobalContext(ScrollProvider, {
  name: "ScrollProvider",
  providesData: true,
  props: {},
});