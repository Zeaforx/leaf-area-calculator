import Image from "next/image";
// import CircularFormula from "@/components/formula";
import { useState } from "react";
import { leafData } from "@/components/head";
import Head from "@/components/head";
import Nav from "@/components/nav";

export default function Home() {
    const [length, setLength] = useState();
    const [width, setWidth] = useState();
    const [formula, setFormula] = useState();
    const [answer, setAnswer] = useState("Answer");
    // const [display, setDisplay] = useState(handleFormulaClick);
    const Area = Math.PI * width ** 2;

    function handleLength(event) {
        setLength(event.target.value);
    }
    function handleWidth(event) {
        setWidth(event.target.value);
    }

    function handleFormulaClick() {
        if (formula == "acicular") {
            return (
                <div className="input--container">
                    <p> FORMULA = π x Area x Length</p>;
                    <input
                        placeholder="length(cm)"
                        type="number"
                        onChange={handleLength}
                    />
                    <input
                        placeholder="breadth(cm)"
                        type="number"
                        onChange={handleWidth}
                    />
                </div>
            );
        } else if (formula == "lanceolate") {
            return (
                <div className="input--container">
                    <p> FORMULA = Length x 1/2 x Breadth</p>;
                    <input
                        placeholder="length(cm)"
                        type="number"
                        onChange={handleLength}
                    />
                    <input
                        placeholder="breadth(cm)"
                        type="number"
                        onChange={handleWidth}
                    />
                </div>
            );
        } else if (formula == "saggitate") {
            return (
                <div className="input--container">
                    <p> FORMULA = Breadth x Length - (1/6 x Area)</p>;
                    <input
                        placeholder="length(cm)"
                        type="number"
                        onChange={handleLength}
                    />
                    <input
                        placeholder="breadth(cm)"
                        type="number"
                        onChange={handleWidth}
                    />
                </div>
            );
        } else if (formula == "ovate") {
            return (
                <div className="input--container">
                    <p> FORMULA = Breadth x Length - (1/6 x Area)</p>;
                    <input
                        placeholder="length(cm)"
                        type="number"
                        onChange={handleLength}
                    />
                    <input
                        placeholder="breadth(cm)"
                        type="number"
                        onChange={handleWidth}
                    />
                </div>
            );
        } else if (formula == "cordate") {
            return (
                <div className="input--container">
                    <p> FORMULA = π x (1/2 x Breadth)</p>
                    ;
                    <input
                        placeholder="length(cm)"
                        type="number"
                        onChange={handleLength}
                    />
                    <input
                        placeholder="breadth(cm)"
                        type="number"
                        onChange={handleWidth}
                    />
                </div>
            );
        } else if (formula == "circular") {
            return (
                <div className="input--container">
                    <p> FORMULA = π x (1/2 x Breadth) x Area</p>
                    <input
                        placeholder="length(cm)"
                        type="number"
                        onChange={handleLength}
                    />
                    <input
                        placeholder="breadth(cm)"
                        type="number"
                        onChange={handleWidth}
                    />
                </div>
            );
        } else {
            null;
        }
    }

    function calculate(formulaChoice) {
        if (formulaChoice == "acicular") {
            let a = Math.PI * Area * length;
            setAnswer(a);
        } else if (formulaChoice == "lanceolate") {
            let a = length * 0.5 * width;
            setAnswer(a);
        } else if (formulaChoice == "saggitate") {
            let a = 0.5 * width * length + 0.125 * Area;
            setAnswer(a);
        } else if (formulaChoice == "ovate") {
            let a = width * length - 0.1667 * Area;
            setAnswer(a);
        } else if (formulaChoice == "cordate") {
            let a = Math.PI * (0.5 * width);
            setAnswer(a);
        } else if (formulaChoice == "circular") {
            let a = Math.PI * (0.5 * width) * Area;
            setAnswer(a);
        } else {
        }
    }

    function handleFormula2(formula) {
        setFormula(formula);
    }

    return (
        <>
            <Head></Head>
            <Nav></Nav>
            <main>
                <div className="formula--container">
                    <div
                        className="formula"
                        onClick={() => handleFormula2("acicular")}
                    >
                        <h1>acicular</h1>
                    </div>
                    <div
                        className="formula"
                        onClick={() => handleFormula2("lanceolate")}
                    >
                        <h1>lanceolate</h1>
                    </div>
                    <div
                        className="formula"
                        onClick={() => handleFormula2("saggitate")}
                    >
                        <h1>saggitate</h1>
                    </div>
                    <div
                        className="formula"
                        onClick={() => handleFormula2("ovate")}
                    >
                        <h1>ovate</h1>
                    </div>
                    <div
                        className="formula"
                        onClick={() => handleFormula2("cordate")}
                    >
                        <h1>cordate</h1>
                    </div>
                    <div
                        className="formula"
                        onClick={() => handleFormula2("circular")}
                    >
                        <h1>circular</h1>
                    </div>
                </div>
                <small>NOTE: Area = width / 2</small>

                {handleFormulaClick()}

                <button onClick={() => calculate(formula)}>CALCULATE</button>
                <div className="answer--container">
                    <h1>{answer}</h1>
                </div>
            </main>
        </>
    );
}
