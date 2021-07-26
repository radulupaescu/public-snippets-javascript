export interface ISpecification {
    and(other: ISpecification): ISpecification;

    andNot(other: ISpecification): ISpecification;

    or(other: ISpecification): ISpecification;

    orNot(other: ISpecification): ISpecification;

    not(): ISpecification;

    isSatisfiedBy(candidate: any): boolean;
}

export abstract class Specification implements ISpecification {
    and(other: ISpecification): ISpecification {
        return new AndSpecification(this, other);
    }

    andNot(other: ISpecification): ISpecification {
        return new AndNotSpecification(this, other);
    }

    or(other: ISpecification): ISpecification {
        return new OrSpecification(this, other);
    }

    orNot(other: ISpecification): ISpecification {
        return new OrNotSpecification(this, other);
    }

    not(): ISpecification {
        return new NotSpecification(this);
    }

    abstract isSatisfiedBy(candidate: any): boolean;
}

export class AndSpecification extends Specification
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
        return this.leftCondition.isSatisfiedBy(candidate) &&
            this.rightCondition.isSatisfiedBy(candidate);
    }
}

export class OrSpecification extends Specification
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
        return this.leftCondition.isSatisfiedBy(candidate) ||
            this.rightCondition.isSatisfiedBy(candidate);
    }
}

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

export class OrNotSpecification extends Specification
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
        return this.leftCondition.isSatisfiedBy(candidate) || !this.rightCondition.isSatisfiedBy(candidate);
    }
}

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
