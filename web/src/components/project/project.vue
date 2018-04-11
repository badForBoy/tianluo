<template>
  <div class="project">
    <div class="banner-bg">
      <img src="./home_banner.png" alt="">
    </div>
    <div class="item1">
      <div class="content clearfix">
        <div class="item-left">
          <h3>项目介绍</h3>
          <ul>
            <li
              v-for="(item, index) in list"
              @click="select(item, list)"
              :class="{'active': item.active}"
              :key="index">
              <span class="icon"></span>
              {{item.title}}
            </li>
          </ul>
        </div>
        <div class="item-right">
          <div class="item-title">
            <h3>{{newsTitle}}</h3>
            <div class="line"></div>
          </div>
          <!--<h3>{{newsTitle}}</h3>-->
          <!--<div class="line"></div>-->
          <div class="news-list clearfix">
            <div class="group" v-for="(item, index) in contentList" :key="index">
              <h3>{{item.title}}</h3>
              <p v-for="(p, index) in item.content" :key="index">{{p}}</p>
            </div>
            <div class="img" v-for="(img, index) in imgList" :key="index">
              {{img}}
              <img src="./list_1.png" alt="">
              <!--<img :src='img' >-->
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import ImgList from '../../../static/json/imgList'

  export default {
    data() {
      return {
        list: [
          {
            title: '基本介绍',
            active: true,
            content: [
              {
                title: '拟建地点',
                content: [
                  '本项目拟建设地点为江苏省连云港市灌南县化工园区。'
                ]
              },
              {
                title: '建设规模与目标',
                content: [
                  '本项目计划分两期建设，一期建设年产8万吨新型环保车用燃料，二期建设年产30万吨新型环保车用燃料，二期建设用地面积96000平方米。本报告经济测算内容为一期建设内容。',
                  '本项目一期总用地面积46700平方米，总投资29223.66万元，拟建设新型环保车用燃料生产基地。项目建成后，可年产新型环保车用燃料8万吨，每吨售价8000元。'
                ]
              },
              {
                title: '主要建设条件',
                content: [
                  '项目主要原材料石脑油、生物质改性助燃料等产品目前市场供应充足，可实现就近采购，运输距离较短。',
                  '项目靠近公路，原材料及成品运输方便。',
                  '项目厂区周围无居民密集区。 ',
                  '项目有成熟生产工艺技术和装备，能确保证产品质量的可靠性。',
                  ' 项目用电由市政电网供给，方便。'
                ]
              }
            ]
          },
          {
            title: '产品优势',
            active: false,
            content: [
              {
                title: '项目产品优势',
                content: [
                  '本项目新能源燃料可以100%完全代替汽油，可和汽油以任何比例掺合使用也可独用，汽车无需任何改装，具有国家级专利产品。本项目产品拥有六大特点：1.所有检测数据优于国六汽油标准；2.可以减少汽车尾气排放污染55%以上；3.抗爆指数高，动力性能优良，能自动清除积碳和油垢，延长发动机使用寿命；4.汽车无需任何改装即可直接使用；5.无爆炸风险；6.产品质量使用责任险由中国平安财产保险股份有限公司承保跟进。',
                  '通过对本项目生产的1#新型环保车用燃料、2#新型环保车用燃料，用汽油机台架试验方法进行检测，考察同等条件下发动机燃用1#新型环保车用燃料、2#新型环保车用燃料，和93 号汽油的经济性、动力性和排放性。',
                  '从BJ491Q汽油机分别燃用1#新型环保车用燃料、2#新型环保车用燃料和93号汽油外特性试验结果可以看出：',
                  '（1）燃用新型环保车用燃料的有害排放物CO、HC、NOx比燃用93＃汽油下降55%以上； ',
                  '（2）燃用新型环保车用燃料的最大扭矩比燃用汽油时增大约5%，但最大功率比汽油下降约3%，最大扭矩和最大功率出现的转速比93＃汽油低500rpm左右；',
                  '（3）有效燃油消耗：燃用新型环保车用燃料的有效燃油消耗与燃用汽油基本相当。'
                ]
              },
              {
                title: '项目投入总资金与效益情况',
                content: [
                  '该项目前景可观，优势明显，符合国家产业政策发展的方向，有良好的经济效益和社会效益。产品起点高，技术设备先进，为国内行业先进水平。该项目的上马及投产一定能有力地推动我国环保汽车燃料的供应能力，推动行业进一步发展，提升行业产品质量和市场竞争力。项目可以提供168个新增就业岗位，建成后可实现年产值64000.00万元，能够积极带动进贤县地区经济的增长。'
                ]
              }
            ],
            img: [
              {
                'title': '专业证书',
                imgList: []
              }
            ]
          },
          {
            title: '专业技术/证书',
            active: false,
            content: [
              {
                title: '专业技术',
                content: [
                  '经过十多年不断创新和改进，目前公司已掌握生物质制液体燃料的关键技术，可以利用生物质农作物废弃物经气化后合成出生物质液体燃料的主要原料，实现了把可再生的生物质资源合成了工业液体燃料。利用生物质合成的工业液体燃料与改良性助燃添加剂进行物理混合，经过十多年的不断改进和创新终于研发出一款在经济性、动力性、排放性都优于普通汽油的生物质新型车用环保清洁燃料，该新型环保车用燃料已经取得国家级发明专利'
                ]
              },
              {
                title: '',
                content: []
              }
            ]
          },
          {
            title: '运营实拍',
            active: false,
            content: [
              '/static/img/list_1.png',
              './list_1.png'
            ],
            imgList: ImgList.imgList
          }
        ]
      }
    },
    computed: {
      newsTitle() {
        let title = ''
        this.list.forEach(function (value) {
          if (value.active) {
            title = value.title
          }
        })
        return title
      },
      contentList() {
        let arr = []
        this.list.forEach(function (value) {
          if (value.active) {
            arr = value.content
          }
        })
        return arr
      },
      imgList() {
        let arr = []
        this.list.forEach(function (value) {
          if (value.active) {
            arr = value.imgList
            console.log(arr)
          }
        })
        return arr
      }
    },
    created() {},
    mounted() {
      console.log(this.list)
    },
    methods: {
      select(item, listTitle) {
        listTitle.forEach(function (value, index) {
          value.active = false
        })
        item.active = true
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "~@/common/stylus/variable.styl"
  @import "~@/common/stylus/clearfixx.styl"

  .project
    min-height: 100%
    padding-bottom: 157px
    flex: 1
    .banner-bg
      width: 100%
      height: 380px
      margin: 0 auto
      background: $color-background-f
      overflow: hidden
      text-align: center
      img
        display: inline-block
        height: 380px
    .item1
      width: 100%
      background: $color-background-f
      .content
        width: 1120px
        min-height: 400px
        margin: 0 auto
        font-size: 0
        vertical-align: top
        .item-left
          float: left
          width: 155px
          background: $color-background
          text-align: center
          padding-bottom: 60px
          h3
            font-size: $font-size-large
            font-weight: 600
            margin: 20px 0
          ul
            li
              height: 40px
              line-height: 40px
              font-size: $font-size-medium
              .icon
                display: inline-block
                background-size: 10px 10px !important
              &:hover
                font-weight: 600
                cursor: pointer
              &.active
                background: $color-theme-e
                color: $color-text-theme-e
                font-weight: 600
                .icon
                  background: url("./san.svg") no-repeat
                  display: inline-block
                  width: 10px
                  height: 10px
        .item-right
          float: right
          display: inline-block
          width: 950px
          min-height: 400px
          background: $color-background
          padding: 15px
          .item-title
            position: relative
            .back
              color: $color-text-turn
              cursor: pointer
            h3
              display: inline-block
              margin-right: 10px
              font-size: $font-size-medium-x
            .line
              position: absolute
              left: -15px
              top: 0
              height: 14px
              background: $color-theme
              width: 4px
              margin-bottom: 10px
          h3
            font-size: $font-size-medium
            font-weight: 600
            margin-bottom: 10px
          .news-list
            padding: 10px 0
            .group
              margin-bottom: 20px
              h3
                font-size: $font-size-medium
                font-weight: 600
              p
                font-size: $font-size-medium
                color: $color-text-4
                line-height: 1.4
                /*text-indent: 2em*/
                text-align: left !important
                margin-bottom: 10px
            .img
              float: left
              width: 14.2857%
              margin-bottom: 20px

</style>
