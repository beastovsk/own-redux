import { rootReducer } from "./redux/rootReducer";
import { createStore } from "./store";
import "./styles.css";

// DOM
const counter = document.getElementById("counter");
const add = document.getElementById("add");
const sub = document.getElementById("sub");
const async = document.getElementById("async");
const theme = document.getElementById("theme");
// ==

const store = createStore(rootReducer, 0);

// APP
add.addEventListener("click", () => {
    store.dispatch({ type: "INCREMENT" });
});

sub.addEventListener("click", () => {
    store.dispatch({ type: "DECRIMENT" });
});

async.addEventListener("click", () => {
    setTimeout(() => {
        store.dispatch({ type: "INCREMENT" });
    }, 2000);
});

store.subscribe(() => {
    let state = store.getState();
    counter.textContent = state;
});

store.dispatch({ type: "INIT" });

theme.addEventListener("click", () => {
    document.body.classList.toggle("dark");
});
// ==
