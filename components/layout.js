import Header from "./header";
import Tabs from "./tabs";
export default function Layout({ children }) {
  return (
    <div>
      <Header />
      <Tabs />
      {children}
    </div>
  );
}
