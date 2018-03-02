import { NgModule } from '@angular/core';
import { PlaceholderPipe } from './placeholder/placeholder';
import { PendingsPipe } from './pendings/pendings';
@NgModule({
	declarations: [PlaceholderPipe,
    PendingsPipe],
	imports: [],
	exports: [PlaceholderPipe,
    PendingsPipe]
})
export class PipesModule {}
