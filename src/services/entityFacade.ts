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

interface Resultat {
    id: number | null;
    resultat: string;
    deltagerId: number;
    disciplinId: number;

}

export type { Deltager, Disciplin, Resultat};
