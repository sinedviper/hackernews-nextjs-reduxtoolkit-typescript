import type { NextPage } from "next";

import { withLayout } from "../layout/Layout";
import { Main } from "../layout/Main/Main";

const Home: NextPage = (): JSX.Element => {
  return (
    <>
      <Main type='new' />
    </>
  );
};

export default withLayout(Home);
