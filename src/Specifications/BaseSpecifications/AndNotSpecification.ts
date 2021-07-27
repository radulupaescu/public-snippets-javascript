import { ISpecification, Specification} from '.';

export class AndNotSpecification extends Specification
{
    private leftCondition: ISpecification;

    private rightCondition: ISpecification;

    constructor(left: ISpecification, right: ISpecification)
    {
        super();
        this.leftCondition = left;
        this.rightCondition = right;
    }

    isSatisfiedBy(candidate: any): boolean
    {
        return this.leftCondition.isSatisfiedBy(candidate) && !this.rightCondition.isSatisfiedBy(candidate);
    }
}
