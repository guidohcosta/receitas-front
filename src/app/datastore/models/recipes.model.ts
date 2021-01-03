import { JsonApiModelConfig, JsonApiModel, Attribute } from 'angular2-jsonapi';

@JsonApiModelConfig({
    type: 'recipes'
})
export class Recipe extends JsonApiModel {

    @Attribute()
    title: string;

    @Attribute()
    description: string;

    @Attribute()
    createdAt: Date;

    @Attribute()
    updatedAt: Date;
}
