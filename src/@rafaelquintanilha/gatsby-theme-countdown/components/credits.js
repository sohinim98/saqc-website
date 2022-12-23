/** @jsx jsx */
import { jsx } from 'theme-ui';
import Socials from "../../../components/socials"

const Credits = () => (
  <section>
    <Socials/>
    <footer
      style={{
        marginTop: `var(--space-5)`,
        fontSize: `var(--font-sm)`,
        textAlign: `center`
      }}
    >
      © {new Date().getFullYear()} &middot;
      {` `} SAQC
    </footer>
  </section>
);

export default Credits;
