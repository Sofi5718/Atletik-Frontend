interface Deltager {
    id: number | null;
    navn: string;
    alder: number;
    køn: string;
    klub: string;
}

interface Disciplin {
    id: number | null;
    navn: string;
    resultatType: string;
}

export type { Deltager, Disciplin };
