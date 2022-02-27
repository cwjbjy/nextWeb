import { useMemo } from "react";
import Link from "next/link";
import styles from "../styles/tabs.module.scss";
import { useRouter } from "next/router";
export default function Tabs() {
  const router = useRouter();
  const menu = useMemo(() => {
    return [
      {
        name: "首页",
        path: "/",
      },
      {
        name: "社会",
        path: "/society",
      },
      {
        name: "国内",
        path: "/inland",
      },
      {
        name: "国际",
        path: "/international",
      },
      {
        name: "娱乐",
        path: "/recreation",
      },
      {
        name: "体育",
        path: "/sports",
      },
      {
        name: "军事",
        path: "/military",
      },
    ];
  }, []);
  return (
    <nav className={styles.menu}>
      <ul style={{ listStyleType: "none" }} className={styles.ul}>
        {menu.map((item) => (
          <li key={item.name} className={styles.li}>
            <Link href={{ pathname: item.path }}>
              <a
                className={
                  router.pathname == item.path ? styles.router_focus : ""
                }
              >
                {item.name}
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
