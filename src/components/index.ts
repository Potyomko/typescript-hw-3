type AllType = {
    name: string;
    position: number;
    color: string;
    weight: number;
}

function compare(top: Pick<AllType, 'name' | 'color'>, bottom: Pick<AllType, 'position' | 'weight'>): AllType {
    return {
        name: top.name,
        color: top.color,
        position: bottom.position,
        weight: bottom.weight,
    }
}

function merge<T, U>(objA: T, objB: U): T & U {
    return Object.assign(objA, objB);
}

class Component<T> {
    constructor(public props: T) {}
}

interface Props {
    title: string;
}

class Page extends Component<Props> {
    pageInfo() {
        console.log(this.props.title);
    }
}
