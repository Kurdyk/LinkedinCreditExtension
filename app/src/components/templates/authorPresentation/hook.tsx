import { AUTHORS } from "data/authorsData";

const useData = () => {
    const url = window.location.href;
    const authorName = url.split("/")[4];
    const authorInfo = AUTHORS.find((author) => author.name === authorName);
    return authorInfo;
};

export { useData };