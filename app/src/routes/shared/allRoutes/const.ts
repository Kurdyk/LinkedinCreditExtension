import { RouteInfo } from "./type";
import AuthorPresentation from "components/templates/authorPresentation";

export const allRoutes = [
        { name: "Author presentation", path: "/author/:authorName", element: AuthorPresentation({}) },
    ] as RouteInfo[];
