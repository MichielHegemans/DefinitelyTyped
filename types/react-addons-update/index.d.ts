// Type definitions for React (react-addons-update) 0.14
// Project: http://facebook.github.io/react/
// Definitions by: Asana <https://asana.com>, AssureSign <http://www.assuresign.com>, Microsoft <https://microsoft.com>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

import * as React from 'react';

export = React.__Addons.update;

declare module 'react' {
    interface UpdateSpecCommand<T> {
        $set?: T;
        $merge?: Partial<T>;
        $apply?(value: T): T;
    }

    type UpdateSpecPath<T> = { [K in keyof T]?: UpdateSpec<T[K]> }

    type UpdateSpec<T> = number[][] | UpdateSpecCommand<T> | UpdateSpecPath<T>;

    interface UpdateArraySpec<T> extends UpdateSpecCommand<T> {
        $push?: T[];
        $unshift?: T[];
        $splice?: T[][];
    }

    namespace __Addons {
        export function update<T>(value: T[], spec: UpdateArraySpec<T>): T[];
        export function update<T extends {}>(value: T, spec: UpdateSpec<T>): T;
    }
}

