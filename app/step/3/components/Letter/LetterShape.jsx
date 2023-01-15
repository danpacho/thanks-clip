import { useAtomValue } from "jotai"
import { store } from "../../../../../atoms"

const colors = {
    white: "#ffffff",
    ivory: "#f2f3ec",
    red: "#fff1f2",
    yellow: "#fefce6",
    blue: "#cbe1df",
}

const Hole = ({ color }) => {
    return (
        <div style={{ display: "flex", flex: "1 1 0%" }}>
            <div
                style={{ backgroundColor: `${colors[color]}`, flex: "1 1 0%" }}
            />
            <div
                style={{
                    width: "2rem",
                    height: "2rem",
                    background: `radial-gradient(transparent 0.5rem,${colors[color]} 0.5rem)`,
                }}
            />
            <div
                style={{ backgroundColor: `${colors[color]}`, flex: "1 1 0%" }}
            />
        </div>
    )
}

const Holes = ({ color }) => {
    return (
        <>
            <div style={{ height: "0.5rem", background: `${colors[color]}` }} />
            <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div
                    style={{
                        backgroundColor: `${colors[color]}`,
                        flex: "1 1 0%",
                    }}
                />
                <Hole color={color} />
                <Hole color={color} />
                <Hole color={color} />
                <Hole color={color} />
                <Hole color={color} />
                <Hole color={color} />
                <Hole color={color} />
                <Hole color={color} />
                <div
                    style={{
                        backgroundColor: "rgb(255 255 255)",
                        flex: "1 1 0%",
                    }}
                />
            </div>
            <div
                style={{
                    backgroundColor: `${colors[color]}`,
                    height: "0.5rem",
                }}
            />
        </>
    )
}

const LetterTorn = ({ children, color }) => {
    return (
        <div
            style={{
                position: "absolute",
                filter: "drop-shadow(0 1px 2px rgb(0 0 0 / 0.2)) drop-shadow(0 1px 1px rgb(0 0 0 / 0.06))",
                width: "296px",
                height: "296px",
            }}
        >
            <div
                style={{
                    width: "100%",
                    height: "100%",
                    padding: "2rem 2rem 3rem 2rem",
                    backgroundColor: `${colors[color]}`,
                    clipPath:
                        "polygon(1%2%,5%1%,12%2%,20%0%,27%1%,32%0%,42%1%,49%1%,54%0%,63%1%,67%1%,80%0,85%1%,93%1%,95%0%,99%1%,100%5%,99%12%,99%15%,98%31%,99%35%,99%53%,100%58%,99%69%,100%75%,99%90%,100%97%,97%100%,90%99%,84%100%,80%100%,50%99%,43%100%,36%100%,30%99%,13%99%,9%100%,5%99%,0%99%,0%95%,1%91%,1%88%,0%84%,0%80%,1%70%,0%53%,0%50%,1%46%,1%28%,0%26%,1%9%,0%5%,1%2%)",
                }}
            >
                <div
                    style={{
                        height: "100%",
                        background: `repeating-linear-gradient(${colors[color]},${colors[color]} calc(1.5rem - 1px),#ccc calc(1.5rem - 1px),#ccc 1.5rem)`,
                        display: "flex",
                        flexDirection: "column",
                    }}
                >
                    {children}
                </div>
            </div>
        </div>
    )
}

const LetterOverlap = ({ children, color }) => {
    return (
        <div style={{ position: "absolute" }}>
            <div
                style={{
                    position: "relative",
                    filter: "drop-shadow(0 1px 2px rgb(0 0 0 / 0.2)) drop-shadow(0 1px 1px rgb(0 0 0 / 0.06))",
                    width: "296px",
                    height: "296px",
                }}
            >
                <div
                    style={{
                        position: "absolute",
                        filter: "drop-shadow(0 1px 2px rgb(0 0 0 / 0.08)) drop-shadow(0 1px 1px rgb(0 0 0 / 0.06))",
                        width: "280px",
                        height: "280px",
                        padding: "2rem",
                        transform: "rotate(-2deg)",
                        backgroundColor: `${colors[color]}`,
                        zIndex: 1,
                    }}
                >
                    {children}
                </div>

                <div
                    style={{
                        position: "absolute",
                        filter: "drop-shadow(0 1px 2px rgb(0 0 0 / 0.08)) drop-shadow(0 1px 1px rgb(0 0 0 / 0.06))",
                        width: "280px",
                        height: "280px",
                        backgroundColor: `${colors[color]}`,
                    }}
                />
                <div
                    style={{
                        position: "absolute",
                        filter: "drop-shadow(0 1px 2px rgb(0 0 0 / 0.2)) drop-shadow(0 1px 1px rgb(0 0 0 / 0.06))",
                        width: "280px",
                        height: "280px",
                        transform: "rotate(2deg)",
                        backgroundColor: `${colors[color]}`,
                    }}
                />
            </div>
        </div>
    )
}

const LetterHole = ({ children, color }) => {
    return (
        <div
            style={{
                position: "absolute",
                filter: "drop-shadow(0 1px 2px rgb(0 0 0 / 0.2)) drop-shadow(0 1px 1px rgb(0 0 0 / 0.06))",
                width: "296px",
                height: "296px",
                display: "flex",
                flexDirection: "column",
            }}
        >
            <Holes color={color} />
            <div
                style={{
                    flex: "1 1 0%",
                    padding: "0 2rem 2rem 2rem",
                    backgroundColor: `${colors[color]}`,
                }}
            >
                <div
                    style={{
                        width: "100%",
                        height: "100%",
                        padding: "0 1rem",
                        background: `repeating-linear-gradient(${colors[color]},${colors[color]} calc(1.5rem - 1px),#ccc calc(1.5rem - 1px),#ccc 1.5rem)`,
                        display: "flex",
                        flexDirection: "column",
                    }}
                >
                    {children}
                </div>
            </div>
        </div>
    )
}

const LetterShape = ({ children }) => {
    const type = useAtomValue(store.letter).letterType
    const color = useAtomValue(store.letter).backgroundColor
    return (
        <>
            {type === "torn" && (
                <LetterTorn color={color}>{children}</LetterTorn>
            )}
            {type === "overlap" && (
                <LetterOverlap color={color}>{children}</LetterOverlap>
            )}
            {type === "hole" && (
                <LetterHole color={color}>{children}</LetterHole>
            )}
        </>
    )
}

const LetterShapeStatic = ({ backgroundColor, type, children }) => {
    return (
        <>
            {type === "torn" && (
                <LetterTorn color={backgroundColor}>{children}</LetterTorn>
            )}
            {type === "overlap" && (
                <LetterOverlap color={backgroundColor}>
                    {children}
                </LetterOverlap>
            )}
            {type === "hole" && (
                <LetterHole color={backgroundColor}>{children}</LetterHole>
            )}
        </>
    )
}

export { LetterShape, LetterShapeStatic }
