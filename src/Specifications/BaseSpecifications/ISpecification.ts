export interface ISpecification {
    and(other: ISpecification): ISpecification;

    andNot(other: ISpecification): ISpecification;

    or(other: ISpecification): ISpecification;

    orNot(other: ISpecification): ISpecification;

    not(): ISpecification;

    isSatisfiedBy(candidate: any): boolean;
}
