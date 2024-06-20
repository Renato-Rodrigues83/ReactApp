import { ThumbsUp, Trash } from 'phosphor-react';
import styles from './Comment.module.css';
import { Avatar } from './Avatar';

export function Comment({ content }){
    return(
        <div className={styles.comment}>
             <Avatar hasBorder={false} src="https://github.com/Renato-Rodrigues83.png" />

             <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>

                        <div className={styles.authorAndTime}>

                            <strong>Renato Rodrigues</strong>

                            <time 
                            title="18 de Setembro as 10:33h"
                            dateTime="2023-18-09 10:33:00">
                                Cerca de 1h atrás
                            </time>

                        </div>

                        <button title="Deletar comentario">
                            <Trash size={24} />
                        </button>

                    </header>

                    <p>{content}</p>

                </div>

                <footer>
                    <button>
                        <ThumbsUp />
                        Aplaudir <span>20</span>
                    </button>
                </footer>

             </div>
        </div>
    )
}