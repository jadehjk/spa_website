export default interface IProjectCard{
    type: string;
    src: string;
    videoOptions : {
        autoPlay: boolean;
        loop: boolean;
        controls: boolean;
    },
    header: string;
    subHeader: ReadonlyArray<string>;
    cardContent: ReadonlyArray<string>;
}