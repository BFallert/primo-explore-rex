class PrmPersonalInfoAfterController {

  constructor(navigation) {
    this.navigation = navigation;
  }

  $onInit() {
    // Overwrite the functionality of the 'Edit' button.
    // It now navigates to the corresponding editing page for the user database.
    this.parentCtrl.editDetails = () => {
      this.navigation.navigateTo('https://user.kb.dk/user/edit')
    };
  }

}

PrmPersonalInfoAfterController.$inject = ['navigation'];

export let PrmPersonalInfoAfterConfig = {
  name: 'prmPersonalInfoAfter',
  config: {
    bindings: {
      parentCtrl: '<'
    },
    controller: PrmPersonalInfoAfterController,    
  }
}