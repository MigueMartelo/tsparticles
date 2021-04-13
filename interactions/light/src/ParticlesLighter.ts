import { HoverMode, isInArray, ParticlesInteractorBase } from "tsparticles-engine";
import type { Container, Particle } from "tsparticles-engine";
import { drawParticleShadow } from "./utils";

export class ParticlesLighter extends ParticlesInteractorBase {
    constructor(container: Container) {
        super(container);
    }

    public interact(particle: Particle): void {
        const container = this.container,
            options = container.actualOptions;

        if (options.interactivity.events.onHover.enable && container.interactivity.status === "mousemove") {
            const mousePos = this.container.interactivity.mouse.position;

            if (mousePos) {
                container.canvas.draw((ctx) => {
                    drawParticleShadow(container, ctx, particle, mousePos);
                });
            }
        }
    }

    public isEnabled(): boolean {
        const container = this.container,
            mouse = container.interactivity.mouse,
            events = container.actualOptions.interactivity.events;

        if (!(events.onHover.enable && mouse.position)) {
            return false;
        }

        return isInArray(HoverMode.light, events.onHover.mode);
    }

    public reset(): void {
        // do nothing
    }
}
