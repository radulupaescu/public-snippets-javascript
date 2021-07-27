import { ISpecification, Specification } from '.';

export class NotSpecification extends Specification
{
    private notSpec: ISpecification;

    constructor(other: ISpecification) {
        super();
        this.notSpec = other;
    }

    isSatisfiedBy(candidate: any): boolean {
        return !this.notSpec.isSatisfiedBy(candidate);
    }
}
