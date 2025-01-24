import './App.css';


function MyBtn() {
    return (
        <button>Get Started</button>
    );
}

export default function Home() {
    return (
       <>
         <div className="homes">
            this is the home page...
            <MyBtn />
        </div>
       </>
    );
}