import useSWR from "swr";

export function useSuperHeroes() {
    const { data, error } = useSWR(
        `https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/all.json`
    );

    return {
        heroes: data,
        isLoading: !error && !data,
        isError: error,
    };
}
