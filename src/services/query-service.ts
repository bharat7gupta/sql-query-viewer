import { API_BASE_URL } from "../constants";

export const fetchQueryData = (entity: string) => {
    return fetch(`${API_BASE_URL}/examples/northwind/data/json/${entity}.json`)
        .then(res => res.json())
};
