import { FieldDisplayModel } from "./field-display-model";
import { IdentityDisplayModel } from "./identity-display-model";

export interface EntityDisplayModel {

    identity: IdentityDisplayModel;

    fields: FieldDisplayModel[];
}