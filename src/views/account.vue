<template>
  <div class="layout">
    <div class="page-title q-pa-lg">
      <div class="text-h4">Account Settings</div>
    </div>
    <div class="data-cirlce q-mb-lg">
      <div class="text-subtitle1 q-pa-md">summary</div>
      <div class="summary my-space">
        <img :src="require('../assets/img/guiter.jpg')" alt="" />
        <div class="mail-box">
          <div class="text-subtitle1">Email</div>
          <div class="text-orange" style="text-decoration: underline">
            test@mail.com
          </div>
          <q-separator vertical />
        </div>
        <div class="status">
          <div class="text-subtitle1">Subscription Status</div>
          <div class="text-orange">Free Plan</div>
        </div>

        <div class="status">
          <div class="text-subtitle1">Follow Count</div>
          <div class="text-orange"><q-icon name="person_add" /> 1,999</div>
        </div>
      </div>
    </div>
    <div class="data-cirlce">
      <div class="q-pa-md">
        <div class="text-subtitle1">Subscription Plans</div>
      </div>
      <div class="summary q-pa-lg">
        <div class="intro">
          <div class="text-subtitle1">Upgrade Account</div>
          <div class="q-mb-md">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti,
            exercitationem.
          </div>
        </div>
        <div class="row justify-between">
          <div class="card q-pa-lg">
            <div class="text-h5">Hustler Plan</div>
            <div class="content q-py-lg">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam
              modi fugit repellat delectus nobis aliquam earum soluta similique.
            </div>
            <q-btn color="orange" label="Buy Now"></q-btn>
          </div>
          <div class="card q-pa-lg st">
            <div class="text-h5">Standard Plan</div>
            <div class="content q-py-lg">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam
              modi fugit repellat delectus nobis aliquam earum soluta similique.
            </div>
            <q-btn color="green" label="Buy Now"></q-btn>
          </div>
          <div class="card q-pa-lg mz">
            <div class="text-h5">Mzito Plan</div>
            <div class="content q-py-lg">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam
              modi fugit repellat delectus nobis aliquam earum soluta similique.
            </div>
            <q-btn color="primary" label="Buy Now"></q-btn>
          </div>
        </div>
      </div>

      <div class="data-cirlce">
        <div class="text-subtitle1 q-pa-md">Appearance</div>
        <div class="summary q-pa-lg">
          <q-item tag="label">
            <q-item-section>
              <q-item-label>Change Theme </q-item-label>
            </q-item-section>
            <q-item-section avatar>
              <q-toggle color="dark" v-model="theme" val="pallete" />
            </q-item-section>
          </q-item>
        </div>
      </div>

      <div class="data-cirlce">
        <div class="text-subtitle1 q-pa-md">Privacy and security</div>
        <div class="summary q-pa-lg">
          <div class="text-subtitle1">Password</div>
          <div style="width: 50%">
            <q-input
              v-model="account.passwd"
              type="password"
              label="New Password"
              :dense="dense"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "account",
  data() {
    return {
      theme: true,
      pallete: true,
      account: {
        passwd: "",
      },
    };
  },
};
</script>

<style lang="scss" scoped>
.layout {
  margin-bottom: 5rem;
}
.summary {
  background: rgba(0, 0, 0, 0.062);
  border-radius: 20px;
}
.my-space {
  position: relative;
  padding: 4em 8em;
  display: grid;
  grid-template-columns: repeat(3, 33.3%);
  img {
    width: 80px;
    height: 80px;
    position: absolute;
    bottom: -15%;
    left: 3%;
    border-radius: 50%;
    object-fit: cover;
  }
}
.card {
  max-width: 250px;
  color: white;
  background: linear-gradient(45deg, rgb(151, 146, 146), rgb(23, 134, 134));
  border-radius: 20px;
  padding-top: 4em;
}

.card.st {
  background: linear-gradient(45deg, rgb(209, 19, 19), rgb(107, 165, 165));
}
.card.mz {
  background: linear-gradient(45deg, rgb(209, 158, 19), rgb(142, 107, 165));
}
</style>
