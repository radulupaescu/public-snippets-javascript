import { ISpecification, AndSpecification, OrSpecification, AndNotSpecification, OrNotSpecification, NotSpecification } from '.';

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
