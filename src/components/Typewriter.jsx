import { useEffect, useState } from "react";

const phrases = ["Frontend Developer Jr", "Siempre aprendiendo"];

function Typewriter() {
    const [phraseIndex, setPhraseIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [speed, setSpeed] = useState(100);
    const [charIndex, setCharIndex] = useState(0);

    const currentPhrase = phrases[phraseIndex];
    const text = currentPhrase.slice(0, charIndex);

    useEffect(() => {

        const timeout = setTimeout(() => {
            if (!isDeleting) {
                setCharIndex((prev) => prev + 1);
                if (charIndex >= currentPhrase.length) {
                    setSpeed(1200);
                    setIsDeleting(true);
                }
            } else {
                setSpeed(80);
                setCharIndex((prev) => prev - 1);

                if (charIndex === 0) {
                    setPhraseIndex((prev) => (prev + 1) % phrases.length);
                    setCharIndex(0);
                    setIsDeleting(false);
                }
            }
        }, speed);

        return () => clearTimeout(timeout);
    }, [isDeleting, phraseIndex, speed, charIndex]);

    return (
        <h3 className="flex text-center items-center font-bold text-sky-500">
            <span>|</span>
            <span>{text}</span><span className="animate-pulse">|</span></h3>
    );
}

export default Typewriter;