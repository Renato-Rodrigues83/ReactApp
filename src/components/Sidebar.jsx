import { PencilLine } from 'phosphor-react'

import styles from './Sidebar.module.css'
import { Avatar } from './Avatar';

export function Sidebar(){
    return(
        <aside className={styles.sidebar}>
            <img className={styles.cover} src="https://images.unsplash.com/photo-1694322219350-3ffcc0ef0a68?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=50" />

            <div className={styles.profile}>
               <Avatar src="https://github.com/Renato-Rodrigues83.png" />
                <strong>Renato Rodrigues</strong>
                <span>Web Developer</span>
            </div>

            <footer>
                
                <a href="#">
                    <PencilLine size={20}/>
                    Editar Perfil</a>
            </footer>
        </aside>
    );
}