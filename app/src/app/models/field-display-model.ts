import { IdentityDisplayModel } from "./identity-display-model";

export interface FieldDisplayModel {

    identity: IdentityDisplayModel;

    value: string | string[];

    isRelationship: boolean;
}