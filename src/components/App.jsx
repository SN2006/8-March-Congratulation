import Particles from "./UI/background/Particles.jsx";
import {GreetingSection} from "./parts/GreetingSection.jsx";
import Dock from "./UI/nav/Dock.jsx";
import {WishesSection} from "./parts/WishesSection.jsx";
import {LoveSection} from "./parts/LoveSection.jsx";
import {FlowerSection} from "./parts/FlowerSection.jsx";

import styles from "./App.module.css"

export const App = () => {
    return <>
        <div>
            <Particles
                particleColors={['#e42cf3', '#A66AD4', '#e42cf3']}
                particleCount={500}
                particleBaseSize={300}
                particleSpread={15}
            />
            <div className={styles.large}>
                <Dock
                    items={[
                        {icon: "🖐️", label: "🖐️", onClick: () => {document.location.href="#greeting"}},
                        {icon: "🎉️", label: "🎉️", onClick: () => {document.location.href="#wishes"}},
                        {icon: "😍", label: "😍", onClick: () => {document.location.href="#love"}},
                        {icon: "🌷", label: "🌷", onClick: () => {document.location.href="#flowers"}},
                    ]}
                    className="glass"
                />
            </div>
            <div className={styles.small}>
                <Dock
                    items={[
                        {icon: "🖐️", label: "🖐️", onClick: () => {document.location.href="#greeting"}},
                        {icon: "✉️", label: "✉️", onClick: () => {document.location.href="#letter"}},
                        {icon: "🔥", label: "🔥", onClick: () => {document.location.href="#reminder"}},
                        {icon: "😍", label: "😍", onClick: () => {document.location.href="#love"}},
                        {icon: "🌷", label: "🌷", onClick: () => {document.location.href="#flowers"}},
                    ]}
                    className="glass"
                />
            </div>
        </div>
        <GreetingSection/>
        <WishesSection/>
        <LoveSection/>
        <FlowerSection/>
    </>
}