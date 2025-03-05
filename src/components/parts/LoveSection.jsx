import styles from "./LoveSection.module.css"
import {CenterContainer} from "../UI/container/CenterContainer.jsx";
import ScrollFloat from "../UI/text/ScrollFloat.jsx";

export const LoveSection = () => {
    return <section className={styles["love"]} id="love">
        <CenterContainer>
            <div className={styles["love-inner"]}>
                <ScrollFloat
                    animationDuration={3}
                    ease='back.inOut(2)'
                    scrollStart='center bottom+=50%'
                    scrollEnd='bottom bottom-=40%'
                    stagger={0.1}
                    textClassName={styles.text}
                    containerClassName={styles['text-container']}
                >
                    ❤️ I Love You ❤️
                </ScrollFloat>
            </div>
        </CenterContainer>
    </section>
}