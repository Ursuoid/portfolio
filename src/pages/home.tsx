import { toast } from "../components";
import { BearBWSvg, BearcolSvg } from "../components/icons";
// import AmalgamSvg from "../public/svgs/coloured/amalgam.svg";

export default function Home() {
  return (
    <div class="grid grid-cols-[1fr_8fr_1fr] md:grid-cols-[1fr_10fr_1fr] h-full">
      <div class="col-start-2 flex flex-col h-full mt-16">
        <section class="grid md:grid-cols-[1fr_300px] gap-4">
          <div class="bg-secondary p-4 rounded-box">
            <h3 class="text-3xl text-center text-base-content uppercase">
              Collection of Shinies
            </h3>
            <p></p>
          </div>
          <div class="flex flex-col gap-2 bg-neutral p-4 rounded-box">
            <BearcolSvg class="w-full h-auto" />
          </div>
        </section>
        <div class="divider divider-accent" />
        <section class="grid md:grid-cols-[1fr_150px] gap-4">
          <div class="bg-secondary p-4 rounded-box">
            <h3 class="text-3xl text-center text-base-content uppercase">
              Profession Icons
            </h3>
            <p class="mt-2">
              During work on Logw2 there was a need for vector versions of the
              Guild Wars 2 profession icons. I have recreated them in vector
              format. These aren't identical copies of the in-game icons, I have
              drawn to my taste. I'm hosting them here for anyone to use.
              <br />
              If do you use them, please give credit and link back to this page.
            </p>
            <div class="outline-solid outline-neutral rounded-lg mt-2 grid grid-flow-col grid-rows-5 place-items-center gap-4 p-4">
              <img src="public\svgs\coloured\mesmer.svg" alt="Mesmer Icon" class="w-auto h-10" />
              <img src="public\svgs\coloured\chrono.svg" alt="Chrono Icon" class="w-auto h-10" />
              <img src="public\svgs\coloured\mirage.svg" alt="Mirage Icon" class="w-auto h-10" />
              <img
                src="public\svgs\coloured\virtuoso.svg"
                alt="Virtuoso Icon"
                class="w-auto h-10"
              />
              <img
                src="public\svgs\coloured\troubadour.svg"
                alt="Troubadour Icon"
                class="w-auto h-10"
              />
              <img
                src="public\svgs\coloured\necro.svg"
                alt="Necromancer Icon"
                class="w-auto h-10"
              />
              <img src="public\svgs\coloured\reaper.svg" alt="Reaper Icon" class="w-auto h-10" />
              <img src="public\svgs\coloured\scourge.svg" alt="Scourge Icon" class="w-auto h-10" />
              <img
                src="public\svgs\coloured\harbinger.svg"
                alt="Harbinger Icon"
                class="w-auto h-10"   
              />
              <img
                src="public\svgs\coloured\ritualist.svg"
                alt="Ritualist Icon"
                class="w-auto h-10"
              />
              <img src="public\svgs\coloured\ele.svg" alt="Elementalist Icon" class="w-auto h-10" />
              <img src="public\svgs\coloured\tempest.svg" alt="Tempest Icon" class="w-auto h-10" />
              <img src="public\svgs\coloured\weaver.svg" alt="Weaver Icon" class="w-auto h-10" />
              <img
                src="public\svgs\coloured\catalyst.svg"
                alt="Catalyst Icon"
                class="w-auto h-10"
              />
              <img src="public\svgs\coloured\evoker.svg" alt="Evoker Icon" class="w-auto h-10" />
              <img src="public\svgs\coloured\engi.svg" alt="Engineer Icon" class="w-auto h-10" />
              <img
                src="public\svgs\coloured\scrapper.svg"
                alt="Scrapper Icon"
                class="w-auto h-10"
              />
              <img
                src="public\svgs\coloured\holosmith.svg"
                alt="Holosmith Icon"
                class="w-auto h-10"
              />
              <img
                src="public\svgs\coloured\mechanist.svg"
                alt="Mechanist Icon"
                class="w-auto h-10"
              />
              <img src="public\svgs\coloured\amalgam.svg" alt="Amalgam Icon" class="w-auto h-10" />
              <img src="public\svgs\coloured\thief.svg" alt="Thief Icon" class="w-auto h-10" />
              <img
                src="public\svgs\coloured\daredevil.svg"
                alt="Daredevil Icon"
                class="w-auto h-10"
              />
              <img src="public\svgs\coloured\deadeye.svg" alt="Deadeye Icon" class="w-auto h-10" />
              <img src="public\svgs\coloured\specter.svg" alt="Specter Icon" class="w-auto h-10" />
              <img
                src="public\svgs\coloured\antiquary.svg"
                alt="Antiquary Icon"
                class="w-auto h-10"
              />

              <img src="public\svgs\coloured\ranger.svg" alt="Ranger Icon" class="w-auto h-10" />
              <img src="public\svgs\coloured\druid.svg" alt="Druid Icon" class="w-auto h-10" />
              <img
                src="public\svgs\coloured\soulbeast.svg"
                alt="Soulbeast Icon"
                class="w-auto h-10"
              />
              <img src="public\svgs\coloured\untamed.svg" alt="Untamed Icon" class="w-auto h-10" />
              <img
                src="public\svgs\coloured\galeshot.svg"
                alt="Galeshot Icon"
                class="w-auto h-10"
              />
              <img
                src="public\svgs\coloured\guardian.svg"
                alt="Guardian Icon"
                class="w-auto h-10"
              />
              <img
                src="public\svgs\coloured\dragonhunter.svg"
                alt="Dragonhunter Icon"
                class="w-auto h-10"
              />
              <img
                src="public\svgs\coloured\firebrand.svg"
                alt="Firebrand Icon"
                class="w-auto h-10"
              />
              <img
                src="public\svgs\coloured\willbender.svg"
                alt="Willbender Icon"
                class="w-auto h-10"
              />
              <img
                src="public\svgs\coloured\luminary.svg"
                alt="Luminary Icon"
                class="w-auto h-10"
              />
              <img src="public\svgs\coloured\warrior.svg" alt="Warrior Icon" class="w-auto h-10" />
              <img
                src="public\svgs\coloured\berserker.svg"
                alt="Berserker Icon"
                class="w-auto h-10"
              />
              <img
                src="public\svgs\coloured\bladesworn.svg"
                alt="Bladesworn Icon"
                class="w-auto h-10"
              />
              <img
                src="public\svgs\coloured\spellbreaker.svg"
                alt="Spellbreaker Icon"
                class="w-auto h-10"
              />
              <img src="public\svgs\coloured\paragon.svg" alt="Paragon Icon" class="w-auto h-10"/>
              <img
                src="public\svgs\coloured\revenant.svg"
                alt="Revenant Icon"
                class="w-auto h-10"
              />
              <img src="public\svgs\coloured\herald.svg" alt="Herald Icon" class="w-auto h-10" />
              <img
                src="public\svgs\coloured\renegade.svg"
                alt="Renegade Icon"
                class="w-auto h-10"
              />
              <img
                src="public\svgs\coloured\vindicator.svg"
                alt="Vindicator Icon"
                class="w-auto h-10"
              />
              <img src="public\svgs\coloured\conduit.svg" alt="Conduit Icon" class="w-auto h-10" />
            </div>
          </div>
          <div class="gap-3 text-center flex flex-col items-center justify-center bg-neutral p-4 rounded-box">
            <p class="text-lg font-bold">Bundles</p>
            <a
              href="/bundles/svg-bundle.zip"
              class="btn btn-secondary size-20"
              download="Svgs"
            >
              Coloured Svg
            </a>
            <a
              href="/bundles/svg-white-bundle.zip"
              class="btn btn-secondary size-20"
              download="White Svgs"
            >
              White Svg
            </a>
            <a
              href="/bundles/png-bundle.zip"
              class="btn btn-secondary size-20"
              download="Pngs"
            >
              Coloured Png
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}
