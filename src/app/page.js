import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <nav className={styles.navbar}>
        <div>
          <div>Layout 3</div>
          <div>About</div>
          <div>Services</div>
          <div>Contact</div>
        </div>
      </nav>

      
      <div className={styles.grid}>
        
        <main className={styles.mainContent}>
          <h1>Blog Post Title</h1>
          <p className={styles.author}>by Test</p>
          <p className={styles.date}>📅 Posted on August 24, 2013 at 9:00 PM</p>

          <div className={styles.imagePlaceholder}>900 x 300</div>

          <h2 className={styles.heading}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
            nostrud exercitation ullamco laboris nisi?
          </h2>

          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...</p>
        </main>

        
        <aside className={styles.sidebar}>
          <div className={styles.searchBox}>
            <h3>Blog Search</h3>
            <input type="text" placeholder="Search..." />
          </div>

          <div className={styles.categories}>
            <h3>Blog Categories</h3>
            <div>
              <div>Category Name</div>
              <div>Category Name</div>
              <div>Category Name</div>
              <div>Category Name</div>
              <div>Category Name</div>
              <div>Category Name</div>
            </div>
          </div>

          <div className={styles.widget}>
            <h3>Side Widget Well</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Inventore, perspiciatis adipisci accusamus laudantium odit aliquam repellat tempore quos aspernatur vero.</p>
          </div>
        </aside>
      </div>

      
      <footer className={styles.footer}>
        Copyright © Your Website 2014
      </footer>
    </div>
  );
}
