// Generated by https://quicktype.io

export interface PlacesResponse {
    type:        string;
    query:       string[];
    features:    Feature[];
    attribution: string;
}

export interface Feature {
    id:            string;
    type:          string;
    place_type:    string[];
    relevance:     number;
    properties:    Properties;
    text_es:       string;
    place_name_es: string;
    text:          string;
    place_name:    string;
    center:        number[];
    geometry:      Geometry;
    context:       Context[];
    bbox?:         number[];
    language_es?:  Language;
    language?:     Language;
}

export interface Context {
    id:           string;
    text_es:      string;
    text:         string;
    wikidata?:    string;
    language_es?: Language;
    language?:    Language;
    short_code?:  string;
}

export enum Language {
    Es = "es",
    Fr = "fr",
}

export interface Geometry {
    type:        string;
    coordinates: number[];
}

export interface Properties {
    accuracy?: string;
    wikidata?: string;
}
