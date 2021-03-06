import CoreAbilities from 'parser/core/modules/Abilities';
import { SpellbookAbility } from 'parser/core/modules/Ability';

import { Build } from '../CONFIG';
import * as SPELLS from '../SPELLS';

class Abilities extends CoreAbilities {
  spellbook(): SpellbookAbility[] {
    return [
      {
        spell: SPELLS.AUTO_SHOT,
        category: Abilities.SPELL_CATEGORIES.ROTATIONAL,
        gcd: null,
      },
      {
        spell: SPELLS.STEADY_SHOT,
        category: Abilities.SPELL_CATEGORIES.ROTATIONAL,
        gcd: {
          static: 1500,
        },
      },
      {
        spell: SPELLS.ARCANE_SHOT,
        category: Abilities.SPELL_CATEGORIES.ROTATIONAL,
        cooldown: 6, // TODO: Talents
        gcd: {
          static: 1500,
        },
      },
      {
        spell: SPELLS.MULTI_SHOT,
        category: Abilities.SPELL_CATEGORIES.ROTATIONAL,
        cooldown: 10,
        gcd: {
          static: 1500,
        },
      },
      {
        spell: SPELLS.KILL_COMMAND,
        category: Abilities.SPELL_CATEGORIES.ROTATIONAL,
        cooldown: 5,
        gcd: null,
        // TODO: instead of cast efficiency use usage / proc rate
      },
      {
        spell: SPELLS.AIMED_SHOT,
        category: Abilities.SPELL_CATEGORIES.ROTATIONAL,
        cooldown: 6,
        gcd: {
          static: 1500,
        },
      },
      {
        spell: SPELLS.RAPTOR_STRIKE,
        category: Abilities.SPELL_CATEGORIES.ROTATIONAL,
        cooldown: 6,
        gcd: {
          static: 1500,
        },
      },
      {
        spell: SPELLS.SERPENT_STING,
        category: Abilities.SPELL_CATEGORIES.ROTATIONAL,
        gcd: {
          static: 1500,
        },
      },
      {
        spell: SPELLS.RAPID_FIRE,
        category: Abilities.SPELL_CATEGORIES.COOLDOWNS,
        cooldown: 300 - (this.owner.build === Build.DEFAULT ? 120 : 0),
        gcd: null,
        castEfficiency: {
          suggestion: true,
          recommendedEfficiency: 0.8,
        },
      },
      {
        spell: SPELLS.BESTIAL_WRATH,
        category: Abilities.SPELL_CATEGORIES.COOLDOWNS,
        cooldown: 120,
        gcd: null,
        castEfficiency: {
          suggestion: true,
          recommendedEfficiency: 0.9,
        },
      },
      {
        spell: SPELLS.ASPECT_OF_THE_HAWK,
        category: Abilities.SPELL_CATEGORIES.UTILITY,
        gcd: {
          static: 1500,
        },
      },
      {
        spell: SPELLS.ASPECT_OF_THE_VIPER,
        category: Abilities.SPELL_CATEGORIES.UTILITY,
        gcd: {
          static: 1500,
        },
      },
      {
        spell: SPELLS.ASPECT_OF_THE_CHEETAH,
        category: Abilities.SPELL_CATEGORIES.UTILITY,
        gcd: {
          static: 1500,
        },
      },
      {
        spell: SPELLS.MISDIRECTION,
        category: Abilities.SPELL_CATEGORIES.UTILITY,
        cooldown: 120,
        gcd: {
          static: 1500,
        },
      },
      {
        spell: SPELLS.HUNTERS_MARK,
        category: Abilities.SPELL_CATEGORIES.UTILITY,
        gcd: {
          static: 1500,
        },
      },
      // Traps
      {
        spell: SPELLS.EXPLOSIVE_TRAP,
        category: Abilities.SPELL_CATEGORIES.UTILITY,
        cooldown: 30,
        gcd: {
          static: 1500,
        },
      },
    ];
  }
}

export default Abilities;
